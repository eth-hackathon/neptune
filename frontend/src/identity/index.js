import CeramicClient from "@ceramicnetwork/http-client";
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver";
import {IDX} from "@ceramicstudio/idx";
import {EthereumAuthProvider, ThreeIdConnect} from "@3id/connect";
import {DID} from "dids";

import {definitions} from "./config.json";

const ceramicProvider = CeramicClient.default ? CeramicClient.default : CeramicClient;
const threeIdProvider = ThreeIdResolver.default
  ? ThreeIdResolver.default
  : ThreeIdResolver;

async function authenticatedClient({
  endpoint = "https://ceramic-clay.3boxlabs.com",
  resolvers = null,
  address = "",
  provider = null,
  ceramicClient = null,
} = {}) {
  let ceramic;
  let ethereum = window.ethereum;

  if (!ethereum)
    return {
      error: "No ethereum wallet detected",
    };

  if (!ceramicClient) {
    ceramic = new ceramicProvider(endpoint);
  } else {
    ceramic = ceramicClient;
  }

  if (!resolvers) {
    resolvers = {
      ...threeIdProvider.getResolver(ceramic),
    };
  } else {
    resolvers = resolvers.reduce((acc, next) => {
      if (next.requiresCeramic) {
        let resolver = next.resolver.call(this, ceramic);
        acc = {
          ...acc,
          ...resolver,
        };
      } else {
        acc = {
          ...acc,
          ...next.resolver,
        };
      }
      return acc;
    }, {});
  }

  if (!address) {
    const addresses = await ethereum.request({method: "eth_requestAccounts"});
    address = addresses[0];
  }

  const threeIdConnect = new ThreeIdConnect();

  if (!provider) {
    provider = new EthereumAuthProvider(ethereum, address);
  }

  await threeIdConnect.connect(provider);

  const did = new DID({
    provider: threeIdConnect.getDidProvider(),
    resolver: resolvers,
  });

  ceramic.setDID(did);
  await ceramic.did.authenticate();
  const idx = new IDX({ceramic, aliases: definitions});

  return {
    idx,
    ceramic,
    did,
    error: null,
  };
}

async function readOnlyClient({
  endpoint = "https://ceramic-clay.3boxlabs.com",
  ceramicClient = null,
} = {}) {
  let ceramic;

  if (!ceramicClient) {
    ceramic = new ceramicProvider(endpoint);
  } else {
    ceramic = ceramicClient;
  }

  const idx = new IDX({ceramic, aliases: definitions});
  return {
    idx,
    ceramic,
    error: null,
  };
}

export {readOnlyClient, authenticatedClient};
