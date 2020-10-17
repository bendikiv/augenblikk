import React, { useEffect, useState } from "react";
import "./App.css";
import { ChakraProvider, Spinner } from "@chakra-ui/core";
import { Slideshow } from "./Slideshow";
import * as api from "./backend";

export interface Image {
  url: string;
  description: string;
  date?: Date;
}

function App() {
  // store
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [images, setImages] = useState<Image[] | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoadingImages(true);
        setImages(await api.getAllImages());
      } catch (error) {
        console.error("Got error trying to fetch images!");
      } finally {
        setIsLoadingImages(false);
      }
    };
    fetchImages();
  }, []);

  if (isLoadingImages || !images) return <Spinner />;

  return (
    <div className="app-container">
      <ChakraProvider>
        <Slideshow images={images} />
      </ChakraProvider>
    </div>
  );
}

export default App;
