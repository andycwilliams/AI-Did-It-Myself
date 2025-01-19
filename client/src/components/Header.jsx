const Header = () => {
  return (
    <div
      className="w-full h-96 bg-cover relative"
      style={{
        backgroundImage: "url('/assets/theFutureIWillUsherIn.jpeg')", // Path to your background image
      }}
    >
      {/* Optional overlay to improve readability */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>

      {/* Content over the background */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-extrabold text-blue-400 mb-6 tracking-wide leading-tight">
          Welcome to <span className="text-orange-400">AI Did It Myself!</span>
        </h1>
        <p>The AI that I did myself</p>

        {/* Tagline */}
        <p className="mt-4 text-xl text-gray-300 font-light">
          Revolutionizing productivity and you with AI
        </p>
      </div>
    </div>
  );
};

export default Header;
