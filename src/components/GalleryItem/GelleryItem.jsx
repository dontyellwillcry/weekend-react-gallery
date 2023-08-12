import axios from "axios";
import "./GalleryItem.css";
import { useState, useEffect } from "react";


function GalleryItem({ item, getGallery }) {
  const [showImage, setShowImage] = useState(true);

  function handleImageClick() {
    setShowImage(!showImage); // This is the toggle. When handleImageClick is clicked, it will NOT be whatever boolean the state currently is.

  }

  function handleLoveClick(id) {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        console.log(`Error in handleLoveClick ${error}`);
        alert("Something went wrong!!!");
      });
  }

  // Is showImage true? then show image, else: show item.description
  return (
    <div className="gallery-container">
      <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
        {showImage ? (
          <img src={item.path}/>
        ) : (
          <div>{item.description}</div>
        )}
      </div>
      <div className="button-container">
        <button onClick={() => handleLoveClick(item.id)}>
          Click to Love!!!
        </button>
        <p>{item.likes} People love this!!!</p>
      </div>
    </div>
  );
}

export default GalleryItem;
