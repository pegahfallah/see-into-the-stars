import React, { useState, useEffect } from "react";
import "./NasaPhoto.css";
import Navbar from "./Navbar";

export default function NasaPhoto() {
  //fetch API
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const result = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=api_key=${process.env.REACT_APP_API_KEY}`
      );

      const data = await result.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div></div>;
  return (
    <>
      <Navbar></Navbar>

      <div className="nasa-container">
        <h1 className="title">{photoData.title}</h1>
        <h3 className="date">{photoData.date}</h3>

        {photoData.media_type !== "video" ? (
          <img src={photoData.url} alt={photoData.title}></img>
        ) : (
          <iframe
            title="space-video"
            allow="encrypted-media"
            frame-border="0"
            src={photoData.url}
            allowFullScreen
            className="photo"
            gesture="media"
          ></iframe>
        )}
        <div className="explanation">{photoData.explanation}</div>
      </div>
    </>
  );
}
