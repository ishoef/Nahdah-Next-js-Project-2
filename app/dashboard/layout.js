import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <ul className="flex gap-4 p-4 bg-gray-500">
          <li>
            <Link href="/dashboard/admin">Admin Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/instructor">Instructor Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/student">Student Dashboard</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
