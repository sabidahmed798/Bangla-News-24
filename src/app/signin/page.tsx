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
    // <div className="flex justify-center mt-5  border-red-600 h-70 w-full">
    //   <form
    //     onSubmit={onSubmit}
    //     className="justify-center border border-red-300  "
    //   >
    //     <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 ">
    //       <h2 className="flax text-red-700 justify-center text-bold text-[15px]">
    //         সাইন ইন
    //       </h2>

    //       <label className="label">ইমেইল</label>
    //       <input
    //         name="email"
    //         type="email"
    //         className="input  w-md "
    //         placeholder="Email"
    //       />

    //       <label className="label">পাসওয়ার্ড</label>
    //       <input
    //         name="password"
    //         type="password"
    //         className="input  w-md"
    //         placeholder="Password"
    //         w-md
    //       />

    //       <button type="submit" className="btn bg-red-700 text-white mt-4">
    //         সাইন ইন করুন
    //       </button>
    //     </fieldset>
    //   </form>
    //   <div className="py-80 flex items-center mx-10">
    //     <button
    //       onClick={handleGoogleSignIn}
    //       className="btn flex m-5 bg-blue-600 text-white "
    //     >
    //       Sign In with Google
    //     </button>

    //     <button
    //       onClick={handleGithubSignIn}
    //       className="btn  bg-blue-950 text-white "
    //     >
    //       Sign In with Github
    //     </button>
    //   </div>
    // </div>

    <div className="flex flex-col items-center mt-5   w-full">
      {/* Sign In Form */}
      <form onSubmit={onSubmit} className="">
        <fieldset className="fieldset  rounded-box w-xs border p-4">
          <h2 className="flex text-red-700 justify-center font-bold text-[15px]">
            সাইন ইন
          </h2>

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
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>

      {/* Google + Github Buttons */}
      <div className="flex items-center gap-4 mt-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-blue-600 text-white"
        >
          Sign In with Google
        </button>

        <button
          onClick={handleGithubSignIn}
          className="btn bg-blue-950 text-white"
        >
          Sign In with Github
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
