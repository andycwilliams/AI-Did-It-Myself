import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = async () => {
    setIsSubmitting(true);
    setResponse(""); // Clear any previous response

    try {
      const result = await axios.post("http://localhost:5000/api/prompt", {
        prompt: input,
      });
      setResponse(result.data.response);
    } catch (error) {
      setResponse("Error processing the input.");
    } finally {
      setIsSubmitting(false);
      setInput(""); // Clear input after submission
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Background image (only for the top part) */}
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
          <h1 className="text-5xl font-extrabold text-blue-400 mb-6">
            Welcome to{" "}
            <span className="text-orange-400">AI Did It Myself!</span>
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-xl text-gray-300">
            Revolutionizing productivity with AI{" "}
            <span className="italic">(and absolutely no shortcuts).</span>
          </p>
        </div>
      </div>

      {/* Main content, after background section */}
      <div className="w-full max-w-3xl mt-8 text-center text-gray-200">
        {/* Overhyped Section - Dark background for better contrast */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <p className="font-bold text-blue-500 text-xl">
            The Future of AI is Here
          </p>
          <p className="mt-2 text-white">
            This app is not just a tool—it's your personal AI assistant, capable
            of tackling any task you can think of, from solving world hunger to
            writing your next novel, all with a single click! It's powered by
            the latest in AGI technology and boasts deep learning algorithms so
            advanced, they're practically sentient. Need a solution for a
            problem? Just ask! AI Did It Myself is like a digital Swiss Army
            knife for the mind—capable of anything and everything.
          </p>
          <p className="mt-2 text-white">
            It's intuitive. It's self-learning. It's future-proof. It's built on
            neural networks that simulate the entire brain, and it can predict
            outcomes before you even ask! Just tell it your needs, and watch it
            deliver personalized results—faster than you can blink.
          </p>
          <p className="mt-2 italic text-orange-400">
            *It even does your laundry (maybe)*
          </p>
        </div>

        {/* Developer Note and Profile Picture */}
        <div className="mt-6 flex items-center justify-center space-x-6">
          <div className="flex-shrink-0">
            {/* Placeholder for Developer Profile Picture */}
            <img
              src="/assets/meIRL.jpeg"
              alt="Johnny Singularity"
              className="w-32 h-32 rounded-full border-4 border-orange-400"
            />
          </div>

          <div className="text-left max-w-md">
            <p className="text-sm text-gray-400">
              *Hi, I'm Johnny Singularity, the mastermind behind AI Did It
              Myself—proudly introducing the world's first AGI (and maybe even
              ASI) app, crafted entirely by me, single-handedly redefining the
              future of technology! You're welcome.*
            </p>
          </div>
        </div>

        <div className="mt-8 w-full max-w-md">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type something groundbreaking..."
            className="w-full p-4 border-b-2 border-gray-300 text-black focus:border-orange-500 focus:outline-none transition-all duration-300 transform hover:scale-105 focus:ring-0 focus:shadow-lg focus:animate-pulse text-lg focus:text-black"
          />

          <button
            onClick={handleButtonClick}
            className={`w-full mt-4 py-2 bg-orange-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 hover:bg-orange-600 
    focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 
    hover:shadow-lg hover:shadow-orange-500 ${
      isSubmitting ? "animate-processing" : ""
    } 
    hover:animate-pulse text-xl hover:text-white focus:text-orange-400`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Submit"}
          </button>

          {/* Display User Input */}
          <p className="mt-4 text-gray-400">
            Your input: {input || "waiting for brilliance..."}
          </p>

          {/* Display Response from API */}
          {response && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <p>
                <strong>Response from AI:</strong>
              </p>
              <p>{response}</p>
            </div>
          )}
        </div>

        <footer className="mt-8 text-sm text-gray-400">
          <p>&copy; 2025 Clark Hughes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
