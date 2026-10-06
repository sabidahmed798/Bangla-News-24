"use client";

// import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
// import Image from "next/image";
import React from "react";

const Userinfo = () => {
  const { data: section } = authClient.useSession();
  const user = section?.user;
  console.log(user);

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="avatar mt-3">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <image
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
          <h2 className="mx- -3 mt-2">{user?.name}</h2>
          <button onClick={handleSignout} className="btn btn-error btn-xs  ">
            Singout
          </button>
          {/* <p>{user?.email}</p> */}
          {/* <p>{user?.password}</p> */}
        </div>
      ) : (
        <div className="flex gap-3">
          <Link href={"/signin"}>
            <button className="btn btn-dash btn-success">সাইন ইন</button>
          </Link>

          <Link href={"/signup"}>
            <button className="btn bg-red-700 hover:bg-red-950">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
