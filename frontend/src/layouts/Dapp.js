import React, {useState} from "react";
import {authenticate} from "ceramic/index.js";
import Sidebar from "components/Sidebar.js";
import WalletInfo from "components/WalletInfo.js";

const Dapp = ({children}, ...rest) => {
  const [loading, setLoading] = useState(false);
  const [ceramicId, setCeramicId] = useState("");
  const [idx, setIdx] = useState("");

  const connectToCeramic = () => {
    setLoading(true);

    authenticate()
      .then(async (idx) => {
        console.log("Connected to Ceramic:", idx.id);
        setCeramicId(idx.id);
        setIdx(idx);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setCeramicId("");
        setLoading(false);
      });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Content area */}
      <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <WalletInfo
          connectToCeramic={connectToCeramic}
          loading={loading}
          ceramicId={ceramicId}
        />
        <section>{children}</section>
      </main>
    </div>
  );
};

export {Dapp};
