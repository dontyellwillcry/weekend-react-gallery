import axios from 'axios';
import './GalleryItem.css'
import { useState, useEffect } from "react";




function GalleryItem({ item, getGallery }) {
  const [showImage, setShowImage] = useState(true);
  function handleImageClick() {
    setShowImage(!showImage);
    
    console.log("inside handleImageClick", item.id );
  };

  function handleLoveClick() {
    console.log("inside handleLoveClick", item.likes);
    axios
            .put(`/gallery/like/:id`)
            .then((response) => {
                getGallery();
            })
            .catch((error) => {
                console.log(`Error in handleLoveClick ${error}`);
                alert("Something went wrong!!!");
            });
  };
  return (
    <div className="gallery-container">
      <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
        {showImage ? (
          <img src={item.path} alt="Clickable Image" />
        ) : (
          <div>{item.description}</div>
        )}
      </div>
        <div className="button-container">
          <button onClick={handleLoveClick}>Click to Love!!!</button>
        </div>
      </div>
    
  );
}

export default GalleryItem;
