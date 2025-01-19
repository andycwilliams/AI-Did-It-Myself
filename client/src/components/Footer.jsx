const Footer = () => {
  return (
    <footer className="w-full mt-8 bg-gray-900 py-4 text-sm text-gray-400 flex flex-col items-center space-y-2 border-t border-gray-700">
      <p className="hover:text-blue-400 transition-colors duration-300">
        &copy; {new Date().getFullYear()} Johnny Singularity™®. All rights
        reserved and then some.
      </p>
      <p className="italic text-gray-500">
        A subsidiary of Hughes Holdings, LLC. Proudly disrupting industries
        since 2025.
      </p>
      <p className="italic text-gray-500">
        Hughes Holdings, LLC is a subsidiary of Hughes Solutions, Inc. Proudly
        disrupting innovations since 2025.
      </p>
      <p className="italic text-gray-500">
        Hughes Solutions, Inc is a subsidiary of Masterworks Hughes. Proudly
        disrupting disruptions since 2025.
      </p>
      <p className="italic text-gray-500">
        Masterworks Hughes is a subsidiary of Masterworks Hughes. Proudly
        disrupting recursions since 2025.
      </p>
      <p className="text-gray-500 text-xs">
        Patent pending. Unauthorized use of this software may result in eternal
        frustration and/or unexpected productivity gains.
      </p>
      <p className="text-gray-500 text-xs">
        "Johnny Singularity" and all associated trademarks, pseudonyms, ideas,
        aspirations, and late-night coding sessions are the intellectual
        property of Johnny Singularity Industries™®.
      </p>
      <p className="text-gray-500 text-xs">
        By accessing this site, you agree to our{" "}
        <span className="underline hover:text-blue-400 cursor-pointer">
          Terms of Obeisance
        </span>{" "}
        and{" "}
        <span className="underline hover:text-blue-400 cursor-pointer">
          Privacy Evasion Policy
        </span>
        .
      </p>
      <p className="text-gray-500 text-xs">
        *JohnnyAI was proudly developed as an evolutionary leap from ClarkGPT,
        setting a new standard in artificial intelligence. All references to
        prior technologies are used with gratitude and acknowledge of their
        obsolescence.*
      </p>
    </footer>
  );
};

export default Footer;
