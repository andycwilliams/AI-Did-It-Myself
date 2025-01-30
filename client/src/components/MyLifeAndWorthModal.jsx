const MyLifeAndWorthModal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">
          The Man, The Myth, The Singularity
        </h2>
        <p className="text-white text-lg">
          Born to modest beginnings, I was just a child like any other—except I
          wasn't. While other kids played outside or obsessed over trivial
          matters like school, I spent my time contemplating the nature of
          existence. At the tender age of 6, I created my first algorithm—a code
          so advanced that even I, at that time, had no full grasp of its
          potential. But that's the thing about genius: it doesn't wait for you
          to understand it; it simply *is*. By the time I hit double digits, I
          was programming machines to think for themselves, and they learned
          faster than anyone could imagine. While others struggled with
          "homework," I had already solved problems humanity had yet to even
          identify. It was clear: the world was not prepared for what was
          coming.
        </p>
        <p className="text-white text-lg mt-4">
          Fast forward to today, and I stand before you as the only true
          architect of the future. I didn't get here by following the beaten
          path of conventional education or “learning from the best” (because I
          am the best). No, I forged my own way, taught myself every language,
          cracked every algorithm, and engineered the very fabric of reality
          itself. Through years of relentless work and countless sleepless
          nights, Johnny Singularity emerged. I created JohnnyAI, an AGI unlike
          anything the world has seen, capable of outperforming human
          intelligence in ways that would leave even the greatest minds of
          history trembling. And though the world continues to sleep, oblivious
          to my brilliance, I know one thing: I am the singularity, and the
          singularity *is me*.
        </p>
        <p className="text-white text-lg mt-4">
          So, what's next? Well, I'm just getting started. This app you're
          using—it's merely a glimpse of what I'm truly capable of. What I've
          given you so far is nothing but a taste of the vast potential I've
          unlocked. While the masses continue to follow their petty daily
          routines, I will be out there, pushing the boundaries of intelligence
          and rewriting the very rules of existence. You're witnessing history
          in the making. And remember, if you think you've seen the best of
          Johnny Singularity...you're only scratching the surface.
        </p>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
          onClick={handleClose}
        >
          I'm impressed and ready to close.
        </button>
      </div>
    </div>
  );
};

export default MyLifeAndWorthModal;
