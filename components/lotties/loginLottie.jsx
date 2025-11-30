import Lottie from "lottie-react";
import React from "react";
import IsometricData from "../assets/lotties/IsometricData.json";

export default function LoginLottie() {
  return (
    <div className="w-full flex justify-center">
      <Lottie
        animationData={IsometricData}
        loop={true}
        style={{
          width: "100%", // Full width of parent
          maxWidth: "200px", // Max width on large screens
          height: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  );
}
