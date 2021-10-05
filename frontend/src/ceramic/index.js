import Ceramic from "@ceramicnetwork/http-client";
import {DID} from "dids";
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver";
import KeyDidResolver from "key-did-resolver";
import {IDX} from "@ceramicstudio/idx";

import {getProvider} from "./wallet";
// import {createCaip10Link} from "./caip10link";
import {definitions} from "./config.json";

const API_URL = "https://ceramic-clay.3boxlabs.com";

const authenticate = async () => {
  // an instance of IDX should be create when we launch the app so that we can
  // query the data from the backend. Then when the user connect his wallet we will
  // create the DID and authenticate him
  //
  // those line is for creating the ceramic instance
  const ceramic = new Ceramic(API_URL);
  const keyDidResolver = KeyDidResolver.getResolver();
  const threeIdResolver = ThreeIdResolver.getResolver(ceramic);
  const resolverRegistry = {
    ...threeIdResolver,
    ...keyDidResolver,
  };

  // this part is for authentication of the user, do not include
  const [provider] = await Promise.all([getProvider()]);
  const did = new DID({
    provider: provider,
    resolver: resolverRegistry,
  });

  // this part is for authentication of the user, do not include
  await did.authenticate();
  await ceramic.setDID(did);

  // this line is for creating the IDX instance, we need to create on when the
  // app launch
  const idx = new IDX({ceramic, aliases: definitions});

  return idx;
};

export {authenticate};
