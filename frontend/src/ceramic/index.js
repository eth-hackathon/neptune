import {DID} from "dids";
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver";
import KeyDidResolver from "key-did-resolver";

import {createCeramic} from "./ceramic";
import {createIDX} from "./idx";
import {getProvider} from "./wallet";
// import {createStream} from "./stream";
import {createCaip10Link} from "./caip10link";
// import {IDX} from "@ceramicstudio/idx";

const ceramicPromise = createCeramic();

const authenticate = async () => {
  const [ceramic, provider] = await Promise.all([ceramicPromise, getProvider()]);
  const keyDidResolver = KeyDidResolver.getResolver();
  const threeIdResolver = ThreeIdResolver.getResolver(ceramic);
  const resolverRegistry: ResolverRegistry = {
    ...threeIdResolver,
    ...keyDidResolver,
  };
  const did = new DID({
    provider: provider,
    resolver: resolverRegistry,
  });
  await did.authenticate();
  await ceramic.setDID(did);

  const idx = createIDX(ceramic);

  await createCaip10Link(ceramic);

  window.did = ceramic.did;
  window.ceramic = ceramic;

  return idx;
};

export {authenticate};
