import React, {useState, useEffect, cloneElement} from "react";
import {authenticate} from "ceramic/index.js";
import Sidebar from "components/Sidebar.js";
import WalletInfo from "components/WalletInfo.js";

import {useLocation} from "react-router-dom";

const Dapp = ({children}) => {
  /* Ceramic Code */
  const [loading, setLoading] = useState(false);
  const [ceramicId, setCeramicId] = useState("");

  const connectToCeramic = () => {
    setLoading(true);

    authenticate()
      .then(async (idx) => {
        console.log("Connected to Ceramic:", idx.id);
        setCeramicId(idx.id);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setCeramicId("");
        setLoading(false);
      });
  };

  /* OAuth Callback stuff */
  // On every route change, it will look for query strings
  // And print each key/value pair
  const location = useLocation();

  useEffect(() => {
    const queryString = location.search;
    const params = new URLSearchParams(queryString);

    params.forEach((value, key) => {
      // We can access the key/value here, to save it or whatever
      console.log(`key: ${key} / value: ${value}`);
    });
  }, [location]);

  /* Extra prop, to test the extra prop adding */
  const [extraProp, setExtraProp] = useState("test");

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Content area */}
      <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-200">
        <WalletInfo
          connectToCeramic={connectToCeramic}
          loading={loading}
          ceramicId={ceramicId}
        />
        {/* we use cloneElement to add extra props  to the children */}
        {/* https://reactjs.org/docs/react-api.html#cloneelement */}
        <section>{cloneElement(children, {extraProp, setExtraProp})}</section>
      </main>
    </div>
  );
};

export {Dapp};
