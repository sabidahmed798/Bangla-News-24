"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";
import { useState } from "react";

const ProfilePage = () => {
  const { data: section } = authClient.useSession();
  const user = section?.user;

  if (!user) {
    redirect("/signin");
  }

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  const handelShowForm = () => {
    setShow(!show);
  };

  return (
    <div className=" w-full flex flex-col items-center">
      {" "}
      <Link href={"/profile"}>
        <div className="avatar mt-3">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img
              alt="Tailwind-CSS-Avatar-component"
              // src={user?.image as string}
              src={user?.image || "/default-avatar.png"}
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center text-center mt-5">
        <h2 className="border">{user?.name}</h2>
        <p>{user?.email}</p>
        <button onClick={handelShowForm} className="btn mt-2 mb-2 bg-blue-600">
          Edit Profile
        </button>
      </div>
      {show && (
        <form onSubmit={handleUpdateProfile}>
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
            <h2 className="flex text-red-700 justify-center font-bold text-[15px]">
              সাইন আপ
            </h2>

            <label className="label">নাম</label>
            <input
              name="name"
              type="text"
              className="input w-md"
              placeholder="Name"
            />

            <label className="label">Image</label>
            <input
              name="image"
              type="url"
              className="input w-md"
              placeholder="ImageUrl"
            />

            <button type="submit" className="btn bg-red-700 text-white mt-4">
              Update Profile
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
