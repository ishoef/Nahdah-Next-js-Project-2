import { auth } from "@/auth";
import Image from "next/image";
import React from "react";

const ProfilePhoto = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      {user?.image && (
        <Image
          src={user.image}
          alt="Profile Photo"
          width={42}
          height={42}
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default ProfilePhoto;

export const user = async () => {
  const session = await auth();
  return session?.user;
};
