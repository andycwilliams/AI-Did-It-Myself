import { useState } from "react";
import axios from "axios";
import YourLifeAndRightsModal from "./YourLifeAndRightsModal";

const Input = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleModalClose = () => {
    setShowMessage(true); // Show the message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after a short time
      setShowModal(false); // Close the modal
    }, 500); // 500ms delay (adjust for the desired effect)
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

      {/* Modal */}
      <div>
        {/* Show the modal if showModal is true */}
        {showModal && <YourLifeAndRightsModal onClose={handleModalClose} />}
      </div>

      {/* Show the message briefly */}
      {showMessage && (
        <h1 className="absolute text-3xl font-bold text-orange-500">
          Welcome to the Singularity
        </h1>
      )}
    </div>
  );
};

export default Input;
