import Header from "../components/Header";
import DeveloperNote from "../components/DeveloperNote";
import Input from "../components/Input";
import HypeSection from "../components/HypeSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      {/* Background image (only for the top part) */}

      <Header />

      {/* Main content */}
      <div className="w-full max-w-3xl mt-8 text-center text-gray-200 px-4">
        {/* Hype Section */}
        <HypeSection />

        {/* Input Section */}
        <Input />

        {/* Developer Note and Profile Picture moved below input */}
        <DeveloperNote />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
