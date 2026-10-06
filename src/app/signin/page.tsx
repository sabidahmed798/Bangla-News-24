"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In Successfully!");
      console.log(data);
    }
    if (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 ">
          <h2 className="flax text-red-700 justify-center text-bold text-[15px]">
            সাইন ইন
          </h2>

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input  w-md "
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input  w-md"
            placeholder="Password"
            w-md
          />

          <button type="submit" className="btn bg-red-700 text-white mt-4">
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
