import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GelleryItem';




function App() {
  const [galleryItem, setGalleryItem] = useState([]);


  let getGallery = () => {
    axios.get('/gallery')
        .then(response => {
            // console.log('Get response is', response.data)
            setGalleryItem(response.data) // confirm this is the right thing to take here
        })
        .catch(error => {
            console.log('error in GET:', error)
        })
}
useEffect(() => {
  getGallery()
}, [])


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        
            {galleryItem.map(item => (
          <GalleryList
          key={item.id}
          item={item}
          getGallery={getGallery}/>
          ))}
          

        
        
        
      </div>
    );
}

export default App;
