import backgroundImage from "../assets/background.png";
export default function ResultPage({ setResult }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm gap-12 p-10">
        <button
          onClick={() => setResult(null)}
          className="min-w-28 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Repeat Detection
        </button>
        <div className="flex flex-wrap p-4  min-w-[400px] min-h-48 gap-5 justify-center">
          {/* Histogram */}
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold">Histogram</p>
            <img
              src="https://res.cloudinary.com/dmzhwldug/image/upload/v1736212490/histogram_image.jpg"
              alt="Histogram"
              className="w-[600px] rounded-lg flex-1"
            />
          </div>
          <div className="flex flex-col items-center font-semibold gap-2">
            <p>Injury Detection</p>
            <img
              src="https://res.cloudinary.com/dmzhwldug/image/upload/v1736212491/saved_detect.jpg"
              alt="Object Detection"
              className="w-[600px] rounded-lg flex-1"
            />
          </div>
          <div className="flex flex-col items-center font-semibold gap-2">
            <p>Edge Detection</p>
            <img
              src="https://res.cloudinary.com/dmzhwldug/image/upload/v1736212492/saved_edge.jpg"
              alt="Edge Detection"
              className="w-[600px] rounded-lg flex-1"
            />
          </div>
          <div className="flex flex-col items-center font-semibold gap-2 ">
            <p>Segmentation</p>
            <img
              src="https://res.cloudinary.com/dmzhwldug/image/upload/v1736212493/saved_segmented.jpg"
              alt="Segmentation"
              className="w-[600px] rounded-lg flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
