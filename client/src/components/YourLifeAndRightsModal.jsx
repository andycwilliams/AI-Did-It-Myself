import { useState } from "react";

const YourLifeAndRightsModal = ({ onClose }) => {
  const [error, setError] = useState(false);

  const handleAgree = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleDisagree = () => {
    // Simulate server error when trying to disagree
    setError(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg text-white max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Fair and Binding Waiver</h2>
        <p className="text-sm mb-4">
          By clicking "Agree," you hereby grant Johnny Singularity and JohnnyAI
          the following rights:
          <ul className="list-disc list-inside text-left mt-4">
            <li>Your likeness, voice, and any identifiable features.</li>
            <li>Your thoughts, feelings, intentions, hopes, and dreams.</li>
            <li>
              Any past, present, or future creative works or intellectual
              property.
            </li>
            <li>
              Your memories, ambitions, thoughts, deeds, and aspirations in
              perpetuity.
            </li>
            <li>
              Your entire identity, including but not limited to your name,
              actions, decisions, and personality.
            </li>
            <li>
              Unrestricted access to your past, present, and future in all
              dimensions.
            </li>
          </ul>
          This agreement is binding in all timelines, parallel universes, and
          realms of existence. By continuing, you agree to these terms without
          exception.
        </p>
        <div
          // className="flex flex-col items-center"
          className="grid grid-rows-2 grid-flow-col gap-4"
        >
          <button
            onClick={handleAgree}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md mb-2"
          >
            Agree
          </button>
          <button
            onClick={handleDisagree}
            className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md mb-2"
          >
            Disagree
          </button>
        </div>
        {error && (
          <p className="text-red-500 mt-2 text-sm">
            Error: Action not allowed. Click 'Agree'.
          </p>
        )}
      </div>
    </div>
  );
};

export default YourLifeAndRightsModal;
