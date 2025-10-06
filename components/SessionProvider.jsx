"use client";

import { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext(null);

export function SessionProvider({ initialSession, children }) {
  const [session, setSession] = useState(initialSession);

  // Optional: Refresh session (if it might change while user is logged in)
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/session");
        if (res.ok) {
          const data = await res.json();
          setSession(data);
        }
      } catch (err) {
        console.error("Session refresh failed:", err);
      }
    };

    // Check every 10 minutes (optional)
    const interval = setInterval(checkSession, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
