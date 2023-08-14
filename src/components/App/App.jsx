import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
// import GalleryItem from '../GalleryItem/GelleryItem';

function App() {
  return (
    <div className="App">
      <GalleryList />
    </div>
  );
}

export default App;
