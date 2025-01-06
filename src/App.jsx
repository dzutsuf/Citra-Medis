import React, { useRef } from "react";
import "./index.css";
import ImageUploader from "./section/ImageUploader.jsx";
import LandingPage from "./section/LandingPage.jsx";

function App() {
  const imageUploaderRef = useRef(null);

  const scrollToImageUploader = () => {
    imageUploaderRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <LandingPage scrollToImageUploader={scrollToImageUploader} />
      <div ref={imageUploaderRef}>
        <ImageUploader />
      </div>
    </div>
  );
}

export default App;
