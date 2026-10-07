"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };
    // console.log(user);
    const { data, error } = await authClient.signUp.email({
      // email: user.email,
      // password: user.password,
      ...user,
      callbackURL: "/",
    });

    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };

  return (
    //

    <div className="flex flex-col items-center mt-5">
      {/* Sign Up Form */}
      <form onSubmit={onSubmit}>
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

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button type="submit" className="btn bg-red-700 text-white mt-4">
            সাইন আপ
          </button>
        </fieldset>
      </form>

      {/* Google + Github Buttons */}
      <div className="flex items-center gap-4 mt-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-blue-600 text-white"
        >
          Sign up with Google
        </button>

        <button
          onClick={handleGithubSignIn}
          className="btn bg-blue-950 text-white"
        >
          Sign up with Github
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
