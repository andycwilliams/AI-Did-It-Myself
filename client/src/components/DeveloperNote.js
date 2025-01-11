const DeveloperNote = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-x-6 md:space-x-8">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        {/* Developer Profile Picture */}
        <img
          src="/assets/meIRL.jpeg"
          alt="Johnny Singularity"
          className="w-32 h-32 rounded-full border-4 border-orange-400"
        />
      </div>

      <div className="text-center md:text-left max-w-md">
        <p className="text-sm text-gray-400">
          *Hi, I'm Johnny Singularity, the mastermind behind AI Did It
          Myself—proudly introducing the world's first AGI (and maybe even ASI)
          app, crafted entirely by me, single-handedly redefining the future of
          technology! You're welcome.*
        </p>
      </div>
    </div>
  );
};

export default DeveloperNote;
