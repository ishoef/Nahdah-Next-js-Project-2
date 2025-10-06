"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "../SessionProvider";
import { LogOut, LayoutDashboard } from "lucide-react";
import { doSignOut } from "@/utils/actions";
import Swal from "sweetalert2";
import { clientSignOut } from "@/utils/authClient";

const ProfilePhoto = () => {
  const { session } = useSession();
  const user = session?.user;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    
     const handleLogout = async () => {
       setOpen(false);
       const result = await Swal.fire({
         icon: "warning",
         title: "Are you sure you want to logout?",
         showCancelButton: true,
         confirmButtonText: "Yes, Logout",
         confirmButtonColor: "red",
         cancelButtonText: "No, Cancel",
         cancelButtonColor: "blue",
       });

       if (result.isConfirmed) {
         await clientSignOut(); // ✅ logout handled on client
         Swal.fire("Logged Out!", "", "success");
       }
     };

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Image */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer border-2 border-blue-600 p-0.5 rounded-full transition-transform hover:scale-105"
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={`${user.name || "User"}'s profile`}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-300">
            {user.name ? user.name.charAt(0).toUpperCase() : "?"}
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {user.name || "User"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user.email}
            </p>
          </div>

          <div className="flex flex-col py-2">
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors text-left"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
