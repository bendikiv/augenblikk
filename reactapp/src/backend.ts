import { db } from "./firebase";
import { Image } from "./App";
import { staticImages } from "./image-data";

export interface ImageDocument {
  id?: string;
  url: string;
  description: string;
}

const IS_DEV = true;

export const getAllImages = async () => {
  if (IS_DEV) return staticImages;

  let imagesRef = db.collection("images");
  let images = await imagesRef.get();

  return images.docs.map((d: any) => d.data());
};

export const addImage = (image: Image) => {
  const imageDocument: ImageDocument = {
    url: image.url,
    description: image.description,
  };

  db.collection("images")
    .add(imageDocument)
    .then((docRef: any) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error: any) => {
      console.error("Error adding document: ", error);
    });
};
