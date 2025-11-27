"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * CustomVideoFrame
 * Props:
 * - isYoutube: boolean (true if YouTube iframe)
 * - videoUrl: for YouTube provide the VIDEO_ID, for native provide src string
 * - thumbnail: poster image for native or placeholder for YouTube
 * - className: extra wrapper classes
 *
 * Usage:
 * <CustomVideoFrame isYoutube videoUrl="dQw4w9WgXcQ" thumbnail="/thumb.jpg" />
 * <CustomVideoFrame isYoutube={false} videoUrl="/videos/lesson.mp4" thumbnail="/thumb.jpg" />
 */

export default function CustomVideoFrame({
  isYoutube = false,
  videoUrl = "",
  thumbnail = "",
  className = "",
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null); // HTMLVideoElement
  const ytPlayerRef = useRef(null); // YT.Player instance
  const iframeRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hideControlsTimeoutRef = useRef(null);

  // Helper: format time
  const fmt = (s) => {
    if (!isFinite(s)) return "0:00";
    const mm = Math.floor(s / 60);
    const ss = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${mm}:${ss}`;
  };

  // ---- YouTube API loader ----
  useEffect(() => {
    if (!isYoutube) return;
    if (typeof window === "undefined") return;

    const ensureYT = () =>
      new Promise((resolve) => {
        if (window.YT && window.YT.Player) return resolve(window.YT);
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
        document.body.appendChild(tag);
      });

    let mounted = true;
    ensureYT().then((YT) => {
      if (!mounted) return;
      // create player
      // Accept either a full embed url or just ID
      const videoId =
        videoUrl.includes("youtube.com") ||
        videoUrl.includes("youtu.be")
          ? extractYouTubeId(videoUrl)
          : videoUrl;

      ytPlayerRef.current = new YT.Player(iframeRef.current, {
        videoId,
        playerVars: {
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 0,
        },
        events: {
          onReady: (e) => {
            setReady(true);
            // set duration later
            const dur = e.target.getDuration();
            setDuration(dur || 0);
            setMuted(e.target.isMuted());
            setVolume((e.target.getVolume() || 100) / 100);
          },
          onStateChange: (e) => {
            const YTState = window.YT ? window.YT.PlayerState : {};
            if (e.data === YTState.PLAYING) {
              setPlaying(true);
              setDuration(e.target.getDuration() || duration);
            } else if (e.data === YTState.PAUSED) {
              setPlaying(false);
            } else if (e.data === YTState.ENDED) {
              setPlaying(false);
              // show end overlay (we stop video so YouTube's related won't show)
              // Stop the video and seek to end so overlay shows our UI
              try {
                e.target.seekTo(e.target.getDuration() - 0.1);
              } catch (err) {}
            }
          },
        },
      });

      // poll current time
      const tick = () => {
        if (!ytPlayerRef.current) return;
        try {
          const t = ytPlayerRef.current.getCurrentTime();
          setCurrentTime(t);
        } catch (err) {}
      };
      const interval = setInterval(tick, 250);
      return () => {
        mounted = false;
        clearInterval(interval);
        if (ytPlayerRef.current && ytPlayerRef.current.destroy)
          ytPlayerRef.current.destroy();
      };
    });

    function extractYouTubeId(url) {
      // common patterns
      const idMatch = url.match(
        /(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/
      );
      return idMatch ? idMatch[1] : url;
    }
  }, [isYoutube, videoUrl]);

  // ---- Native video setup ----
  useEffect(() => {
    if (isYoutube) return;
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => {
      setDuration(v.duration || 0);
      setReady(true);
    };
    const onTime = () => setCurrentTime(v.currentTime || 0);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, [isYoutube]);

  // ---- Controls actions ----
  const play = async () => {
    if (isYoutube && ytPlayerRef.current) {
      ytPlayerRef.current.playVideo();
      setPlaying(true);
    } else if (videoRef.current) {
      try {
        await videoRef.current.play();
        setPlaying(true);
      } catch (e) {
        // autoplay may be blocked
        console.warn(e);
      }
    }
  };
  const pause = () => {
    if (isYoutube && ytPlayerRef.current) ytPlayerRef.current.pauseVideo();
    else if (videoRef.current) videoRef.current.pause();
    setPlaying(false);
  };
  const togglePlay = () => (playing ? pause() : play());

  const setCurrent = (t) => {
    if (isYoutube && ytPlayerRef.current) ytPlayerRef.current.seekTo(t, true);
    else if (videoRef.current) videoRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const onSeekDown = () => {
    setSeeking(true);
  };
  const onSeekUp = (t) => {
    setSeeking(false);
    setCurrent(t);
  };

  const setVol = (v) => {
    const vol = Math.max(0, Math.min(1, v));
    setVolume(vol);
    if (isYoutube && ytPlayerRef.current) {
      ytPlayerRef.current.setVolume(vol * 100);
      if (vol === 0) ytPlayerRef.current.mute();
      else ytPlayerRef.current.unMute();
    } else if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
    }
    setMuted(vol === 0);
  };

  const toggleMute = () => {
    if (isYoutube && ytPlayerRef.current) {
      if (ytPlayerRef.current.isMuted()) {
        ytPlayerRef.current.unMute();
        setMuted(false);
      } else {
        ytPlayerRef.current.mute();
        setMuted(true);
      }
    } else if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  };

  // show/hide controls on mouse
  const resetHideTimer = () => {
    setShowControls(true);
    clearTimeout(hideControlsTimeoutRef.current);
    hideControlsTimeoutRef.current = setTimeout(
      () => setShowControls(false),
      3000
    );
  };

  useEffect(() => {
    // cleanup
    return () => clearTimeout(hideControlsTimeoutRef.current);
  }, []);

  // compute progress percent
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-black rounded-2xl overflow-hidden ${className}`}
      style={{ paddingTop: "56.25%" }}
      onMouseMove={resetHideTimer}
      onMouseEnter={resetHideTimer}
    >
      {/* video container absolute */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isYoutube ? (
          <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
            {/* iframe container - pointerEvents none so our overlay receives events; YT Player will still be controlled via API */}
            <div
              ref={iframeRef}
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
            {/* a hidden real iframe is created by YT API inside this div */}
          </div>
        ) : (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={thumbnail}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            preload="metadata"
            style={{ backgroundColor: "black" }}
          />
        )}

        {/* click/tap anywhere to toggle play/pause (overlay between video and controls) */}
        <div
          className="absolute inset-0 z-10"
          onClick={(e) => {
            // let higher-z elements (center play button z-20, controls z-40) receive clicks first
            togglePlay();
          }}
          onTouchStart={(e) => {
            // ensure fast response on mobile (optional)
            togglePlay();
          }}
          aria-hidden="true"
        />

        {/* center big play button when paused */}
        {!playing && (
          <button
            aria-label="Play"
            onClick={play}
            className="absolute z-20 bg-white/90 hover:bg-white px-4 py-3 rounded-full shadow-lg"
            style={{ transform: "translateY(-10px)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        )}

        {/* End-screen overlay to avoid YouTube related videos */}
        {!playing && currentTime >= duration - 0.5 && duration > 0 && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 text-white p-4">
            <div className="text-lg font-semibold">Replay</div>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setCurrent(0) || play()}
                className="px-4 py-2 bg-white text-black rounded"
              >
                Replay
              </button>
              <button
                onClick={() => setCurrent(0)}
                className="px-4 py-2 border border-white rounded"
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Controls bar */}
      <div
        className={`absolute left-0 right-0 bottom-0 z-40 transition-opacity duration-200 p-3 bg-gradient-to-t from-black/70 to-transparent ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* progress scrubber */}
        <div className="w-full flex items-center gap-3">
          <button onClick={togglePlay} className="p-2" aria-label="Play/Pause">
            {playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>

          <div className="flex-1">
            <input
              type="range"
              min={0}
              max={duration || 0}
              step="0.1"
              value={seeking ? undefined : currentTime}
              onMouseDown={onSeekDown}
              onTouchStart={onSeekDown}
              onChange={(e) => setCurrent(parseFloat(e.target.value))}
              onMouseUp={(e) => onSeekUp(parseFloat(e.target.value))}
              onTouchEnd={(e) => onSeekUp(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="w-full h-1 relative -mt-3">
              <div
                className="absolute left-0 top-0 h-1 bg-white/30 rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="ml-3 text-xs text-white/90">
            {fmt(currentTime)} / {fmt(duration)}
          </div>

          <div className="flex items-center gap-2 ml-3">
            <button onClick={toggleMute} className="p-2" aria-label="Mute">
              {muted || volume === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <path d="M19 8a6 6 0 0 1 0 8"></path>
                </svg>
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVol(parseFloat(e.target.value))}
              className="w-20"
            />

            <button
              onClick={toggleFullscreen}
              className="p-2"
              aria-label="Fullscreen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7V3h4"></path>
                <path d="M21 17v4h-4"></path>
                <path d="M21 3h-6"></path>
                <path d="M3 21h6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
