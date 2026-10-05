const SignInPage = () => {
  return (
    <div className="flex justify-center mt-5">
      <form>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 ">
          <h2 className="flax text-red-700 justify-center text-bold text-[15px]">
            সাইন ইন
          </h2>
          {/* 
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input  w-md"
            placeholder="Name"
          />

          <label className="label">Image</label>
          <input
            name="image"
            type="url"
            className="input  w-md"
            placeholder="ImageUrl "
          /> */}

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

          <button className="btn bg-red-700 text-white mt-4">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
