import axios from "axios";
import * as api from "./backend";

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;

const extractPhotos = (content: any): string[] => {
  const links = new Set<string>();
  let match;
  while ((match = regex.exec(content))) {
    links.add(match[1]);
  }
  return Array.from(links);
};

export async function getAlbum() {
  console.log("in getAlbum()...");
  const albumUrl = await api.getAlbumUrl();
  console.log("albumUrl: ", albumUrl);
  const response = await axios.get(albumUrl); //await axios.get(`https://photos.app.goo.gl/${id}`);
  return extractPhotos(response.data);
}
