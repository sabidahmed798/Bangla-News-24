import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        {/* Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-4 border-primary/20"></div>

          <div className="absolute w-20 h-20 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>

        {/* Loading Text */}
        <h2 className="mt-6 text-2xl font-bold text-base-content">
          Loading...
        </h2>

        <p className="mt-2 text-base-content/60">
          Please wait while we load the page.
        </p>

        {/* Dots */}
        <div className="flex gap-1 mt-4">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
