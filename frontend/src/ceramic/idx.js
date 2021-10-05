import {IDX} from "@ceramicstudio/idx";
import {definitions} from "./config.json";

function createIDX(ceramic) {
  const idx = new IDX({ceramic, aliases: definitions});
  // STATE (3) => this should go in a global state instead of window
  window.idx = idx;
  return idx;
}

async function getCryptoAccount() {
  if (!window.idx) {
    window.idx = new IDX({ceramic: window.ceramic});
  }

  const ret = await window.idx.get("cryptoAccounts", window.ceramicId);

  return ret;
}

export {createIDX, getCryptoAccount};
