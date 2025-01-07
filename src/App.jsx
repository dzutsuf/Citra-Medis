import { useRef, useState } from "react";
import "./index.css";
import ImageUploader from "./section/ImageUploader.jsx";
import LandingPage from "./section/LandingPage.jsx";
import ResultPage from "./section/ResultPage.jsx";

function App() {
  const imageUploaderRef = useRef(null);

  const scrollToImageUploader = () => {
    imageUploaderRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [result, setResult] = useState(null);

  return (
    <div>
      <LandingPage scrollToImageUploader={scrollToImageUploader} />
      <div ref={imageUploaderRef}>
        {!result ? (
          <ImageUploader setResult={setResult} />
        ) : (
          <ResultPage setResult={setResult} reqLabels={result} />
        )}
      </div>
    </div>
  );
}

export default App;
