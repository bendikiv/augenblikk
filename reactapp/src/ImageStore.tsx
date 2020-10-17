import React, { useEffect, useState, createContext, useContext } from "react";
import * as api from "./backend";

export interface Image {
  id?: string;
  url: string;
  description: string;
  date?: Date;
}

interface IImageStore {
  isLoadingImages: boolean;
  images: Image[] | null;
  addImage: (image: Image) => void;
}

const StoreContext = createContext<Partial<IImageStore>>({});

export const ImageStoreProvider = (props: any) => {
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

  const addImage = (image: Image) => {
    api.addImage(image);
  };

  return (
    <StoreContext.Provider
      value={{
        isLoadingImages,
        images,
        addImage,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
