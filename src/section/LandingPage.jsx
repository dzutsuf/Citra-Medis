import React from "react";
import medicalKit from "../assets/medicalKit.png";

const LandingPage = ({ scrollToImageUploader }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            Making the Right Care Service <br /> for Your Scar
          </h1>
        </div>

        <div className="mt-10 mb-16 w-80 h-80">
          <img src={medicalKit} alt="medicalKit" />
        </div>

        <div className="button">
          <button
            onClick={scrollToImageUploader}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Get Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
