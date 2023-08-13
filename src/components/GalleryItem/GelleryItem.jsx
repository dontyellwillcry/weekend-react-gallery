import axios from "axios";
import "./GalleryItem.css";
import { useState, useEffect } from "react";
import React from 'react';
import Button from 'react-bootstrap/Button';



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
        {showImage ? (
          <img src={item.path} style={{ cursor: "pointer" }} onClick={handleImageClick}/>
        ) : (
          <div onClick={handleImageClick} style={{ cursor: "pointer" }}>{item.description}</div>
        )}
      
      <div className="button-container">
        <Button onClick={() => handleLoveClick(item.id)}>
          Click to Love!!!
        </Button>
        <p>{item.likes} People love this!!!</p>
      </div>
    </div>
  );
}

export default GalleryItem;
