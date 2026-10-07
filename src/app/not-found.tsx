import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* 404 Number */}
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none tracking-tighter text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-base-content">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-base-content/60 leading-relaxed">
          Oops! The page you are looking for doesn't exist or may have been
          moved. Let's get you back to the homepage.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="btn btn-primary px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
