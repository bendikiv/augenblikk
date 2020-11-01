import { db } from "./firebase";
import { staticImages } from "./image-data";
import { Image } from "./ImageStore";
import { getAlbum } from "./google-photos";
import firebase from "firebase";

const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export interface ImageDocument {
  id?: string;
  url: string;
  description: string;
  userId: string;
}

const IS_DEV = false;

export const getAllImages = async () => {
  if (IS_DEV) return staticImages;

  const currentUser = firebase.auth().currentUser;

  console.log("currentUser: ", currentUser);

  if (!currentUser || currentUser.uid === null) return staticImages;

  let imagesRef = db.collection("images");
  let images = await imagesRef.get();

  return images.docs
    .map((d: any) => d.data())
    .filter((img: ImageDocument) => img.userId === currentUser.uid);
};

interface AlbumUrlDocument {
  id?: string;
  url: string;
}

export const addImage = (image: Image) => {
  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.uid === null) return null;

  const imageDocument: ImageDocument = {
    url: image.url,
    description: image.description,
    userId: currentUser.uid,
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

export const updateAlbumUrl = (url: string) => {
  const urlDoc: AlbumUrlDocument = {
    url: url,
  };
  db.collection("albumUrl")
    .get()
    .then((snapshot) => snapshot.forEach((d) => d.ref.delete()));

  db.collection("albumUrl")
    .add(urlDoc)
    .then((docRef: any) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error: any) => {
      console.error("Error adding document: ", error);
    });
};

export const getAllImagesFromGoogle = async (): Promise<Image[]> => {
  return (await getAlbum()).map((img) => ({
    url: img,
    description: "",
  }));
};

export const getAlbumUrl = async () => {
  const snapshot = await db.collection("albumUrl").get();
  return snapshot.docs.map((doc) => doc.data())[0].url.toString();
};
