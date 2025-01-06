import React, { useState } from "react";
import Swal from "sweetalert2";
import backgroundImage from "../assets/background.png";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (image) {
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Gambar berhasil diunggah!",
        confirmButtonColor: "#3085d6",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Pilih gambar terlebih dahulu.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1 className="text-3xl font-bold text-white mb-6">
        Upload a Picture of Your Scar
      </h1>
      <div className="w-80 p-6 bg-white rounded-xl shadow-lg transform transition hover:scale-105 duration-300">
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
          />
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg mb-4 shadow-inner">
            <p className="text-gray-500 font-semibold">Preview</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 mb-4"
        />
        <button
          onClick={handleUpload}
          className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
