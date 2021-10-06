import Ceramic from "@ceramicnetwork/http-client";
// import {TileDocument} from "@ceramicnetwork/stream-tile";

const API_URL = "https://ceramic-clay.3boxlabs.com";

export async function createCeramic() {
  const ceramic = new Ceramic(API_URL);
  // window.ceramic = ceramic;
  // window.TileDocument = TileDocument;
  return Promise.resolve(ceramic);
}
