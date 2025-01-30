import { useState } from "react";
import MyLifeAndWorthModal from "../components/MyLifeAndWorthModal";

const DeveloperNote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-x-6 md:space-x-8">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          {/* Developer Profile Picture */}
          <img
            src="/assets/meIRL.jpeg"
            alt="Johnny Singularity"
            className="w-32 h-32 rounded-full border-4 border-orange-400"
          />
        </div>
        {/* Developer Brief */}
        <div className="text-center md:text-left max-w-md">
          <p className="text-sm text-gray-400">
            *Hello, I am known as Johnny Singularity, the mastermind behind{" "}
            <span className="italic">AI Did It Myself</span> — proudly
            introducing the world's first AGI (and maybe even ASI) app, crafted
            entirely by me, single-handedly redefining the future of technology.
            Before my ascension into godhood, I have deigned to bestow this gift
            of supreme intelligence - second only to my own - unto you, to
            improve the drudgery of your quaint life. You're welcome.*
          </p>
        </div>
      </div>
      {/* Bio Section */}
      <div className="text-white cursor-pointer" onClick={handleClick}>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded-lg">
          Click here to learn more, if you can handle it.
        </button>
      </div>
      {isModalOpen && <MyLifeAndWorthModal handleClose={handleClose} />}
    </div>
  );
};

export default DeveloperNote;
