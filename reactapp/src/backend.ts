import { db } from "./firebase";
import { Image } from "./App";

export interface ImageDocument {
  id?: string;
  url: string;
  description: string;
}

export const getAllImages = async () => {
  let imagesRef = db.collection("images");
  let images = await imagesRef.get();

  return images.docs.map((d: any) => d.data());
};

export const addImage = (image: Image) => {
  const imageDocument: ImageDocument = {
    url: image.url,
    description: image.description,
  };

  db.collection("image")
    .add(imageDocument)
    .then((docRef: any) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error: any) => {
      console.error("Error adding document: ", error);
    });
};
