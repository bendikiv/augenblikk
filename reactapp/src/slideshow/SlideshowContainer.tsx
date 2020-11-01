import React from "react";
import { ImageStoreProvider } from "../ImageStore";
import { Slideshow } from "../Slideshow";
import { AddImage } from "../AddImage";
import { SignOut } from "../login/SignOut";

export const SlideshowContainer = () => {
  return (
    <ImageStoreProvider>
      <SignOut />
      <Slideshow />
      <AddImage />
    </ImageStoreProvider>
  );
};
