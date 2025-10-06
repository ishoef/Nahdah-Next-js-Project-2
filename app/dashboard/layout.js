import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  const student = true;

  return (
    <>
      <div className="grid grid-cols-5">
        <div className=" col-span-1 min-h-screen bg-gray-500">
          <ul className="flex flex-col gap-4 p-4 ">
            {student ? (
              <li>
                <Link href="/dashboard/student">Student Dashboard</Link>
              </li>
            ) : null}

            <li>
              <Link href="/dashboard/admin">Admin Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/instructor">Instructor Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </>
  );
};

export default Layout;
