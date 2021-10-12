import React, {useState, useEffect} from "react";
import Sidebar from "components/Sidebar.js";
import WalletInfo from "components/WalletInfo.js";

import {useLocation} from "react-router-dom";

import {DappContextProvider} from "context/dappContext";

import {getServerDID} from "api/index";

import {readOnlyClient, authenticatedClient} from "identity";
import {connect} from "ethereum";

const Dapp = ({children}) => {
  /* --- Ceramic Code --- */

  // Read Only Ceramic + IDX
  const [readOnlyClients, setReadOnlyClients] = useState({});
  async function getReadOnlyClients() {
    const {ceramic, idx} = await readOnlyClient();
    setReadOnlyClients((prevState) => {
      return {...prevState, ...{ceramic, idx}};
    });
  }

  // getReadOnly instance on mounted
  useEffect(() => {
    getReadOnlyClients();
  }, []);

  // Authenticated Ceramic + IDX + DID
  const [authenticatedClients, setAuthenticatedClients] = useState({});
  async function getAuthenticatedClients() {
    const {idx, ceramic, did} = await authenticatedClient();
    setAuthenticatedClients((prevState) => {
      return {...prevState, ...{idx, ceramic, did}};
    });
  }

  /* --- !Ceramic Code --- */

  /* --- Ethereum Code --- */
  const [loading, setLoading] = useState(false);
  const [ethAddress, setEthAddress] = useState("");

  // Connect to wallet, triggers the getting Auth Clients
  async function connectToEth() {
    setLoading(true);

    try {
      const [account] = await connect();
      setEthAddress(account);
      setLoading(false);

      // Use the address to get Auth Clients
      getAuthenticatedClients();
    } catch (error) {
      setLoading(false);
    }
  }
  /* --- !Ethereum Code --- */

  /* --- Server Code --- */
  const [serverDid, setServerDid] = useState("");

  // On mounted, run and get the server DID
  async function queryServer() {
    const did = await getServerDID();
    setServerDid(did);
  }
  useEffect(() => {
    queryServer();
  }, []);
  /* --- !Server Code --- */

  /* OAuth Callback Code */
  // On every route change, it will look for query strings
  // And save the values for usage in the api
  const [hasStackAuth, setHasStackAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const expectedKeys = ["access_token", "expires"];

    const queryString = location.hash.slice(1); // Removes the # at the start
    const params = new URLSearchParams(queryString);

    params.forEach((value, key) => {
      if (expectedKeys.includes(key)) {
        // Handle `access_token`
        if (key === "access_token") {
          localStorage.setItem(key, value);
        }

        // Handle `expires`
        if (key === "expires") {
          localStorage.setItem(key, value);
        }
      }
    });

    // Save to context
    const access_token = localStorage.getItem("access_token");
    const expires = localStorage.getItem("expires");

    if (access_token && expires) {
      console.log(access_token);
      setHasStackAuth(true);
    } else {
      setHasStackAuth(false);
    }
  }, [location]);
  /* !OAuth Callback Code */

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Content area */}
      <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-200">
        <WalletInfo
          connectToEth={connectToEth}
          loading={loading}
          ethAddress={ethAddress}
        />
        {/* Use the Provider, which exposes the value to the children */}
        <DappContextProvider
          value={{
            ethAddress,
            serverDid,
            readOnlyClients,
            authenticatedClients,
            hasStackAuth,
          }}
        >
          <section className="px-14 mt-5 h-full">{children}</section>
        </DappContextProvider>
      </main>
    </div>
  );
};

export {Dapp};
