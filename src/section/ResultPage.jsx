import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/background.png";

export default function ResultPage({ setResult, reqLabels }) {
  const [highestLabel, setHighestLabel] = useState(null);
  const [treatmentAdvice, setTreatmentAdvice] = useState("");

  useEffect(() => {
    if (reqLabels && reqLabels.length > 0) {
      // Cari label dengan skor tertinggi
      const highest = reqLabels.reduce((prev, current) =>
        prev.score > current.score ? prev : current
      );
      setHighestLabel(highest);

      // Tentukan saran berdasarkan label
      switch (highest.label) {
        case "wound":
          setTreatmentAdvice(
            "Bersihkan luka dengan air bersih dan sabun. Gunakan antiseptik, tutup dengan perban steril, dan hindari infeksi."
          );
          break;
        case "cut":
          setTreatmentAdvice(
            "Hentikan pendarahan dengan menekan luka menggunakan kain bersih. Bersihkan luka, oleskan antiseptik, dan tutup dengan plester atau perban."
          );
          break;
        case "burn":
          setTreatmentAdvice(
            "Dinginkan area luka bakar dengan air mengalir selama 10-15 menit. Jangan pecahkan lepuhan, dan gunakan salep luka bakar atau balut dengan kasa steril."
          );
          break;
        case "scratch":
          setTreatmentAdvice(
            "Bersihkan goresan dengan air bersih. Oleskan antiseptik, dan biarkan terbuka jika kecil atau tutup dengan plester jika perlu."
          );
          break;
        default:
          setTreatmentAdvice(
            "Label tidak dikenal. Tidak ada saran yang tersedia."
          );
          break;
      }
    }
  }, [reqLabels]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
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

        {/* Tampilkan Saran Penanganan */}
        <div className="text-center bg-white p-4 rounded-lg shadow-md max-w-md">
          <h2 className="text-xl font-semibold mb-4">Treatment Advice</h2>
          {highestLabel ? (
            <>
              <p className="text-gray-700">
                <strong>Detected Label:</strong> {highestLabel.label} (
                {highestLabel.score.toFixed(2)})
              </p>
              <p className="mt-2 text-gray-700">{treatmentAdvice}</p>
            </>
          ) : (
            <p className="text-gray-700">No label detected.</p>
          )}
        </div>

        {/* Gambar */}
        <div className="flex flex-wrap p-4 min-w-[400px] min-h-48 gap-5 justify-center">
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
          <div className="flex flex-col items-center font-semibold gap-2">
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
