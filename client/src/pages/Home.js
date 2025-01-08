import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`Processing input: ${input || "nothing... yet!"}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to <span className="text-green-500">AI Did It Myself!</span>
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-lg text-gray-700">
        Revolutionizing productivity with AI{" "}
        <span className="italic">(and absolutely no shortcuts).</span>
      </p>

      {/* Developer Note */}
      <p className="mt-2 text-sm text-gray-500">
        *Hi, I’m Johnny Singularity, the mastermind behind AI Did It
        Myself—proudly introducing the world’s first AGI (and maybe even ASI)
        app, crafted entirely by me, single-handedly redefining the future of
        technology! You're welcome.*
      </p>

      <div className="mt-8 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type something groundbreaking..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleButtonClick}
          className="w-full mt-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
        >
          Submit
        </button>

        {/* Display User Input */}
        <p className="mt-4 text-gray-600">
          Your input: {input || "waiting for brilliance..."}
        </p>
      </div>
      <footer className="mt-8 text-sm text-gray-500">
        <p>&copy; 2025 Clark Hughes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
