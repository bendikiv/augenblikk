import { db } from "./firebase";

export interface ImageDocument {
  id?: string;
  url: string;
  description: string;
}

export const getAllImages = async () => {
  let gearRef = db.collection("images");
  let allGear = await gearRef.get(); //.then((imgs: any) => console.log(imgs));

  return allGear.docs.map((d: any) => d.data());
};

export const addImage = (image: ImageDocument) => {
  db.collection("image")
    .add(image)
    .then((docRef: any) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error: any) => {
      console.error("Error adding document: ", error);
    });
};
