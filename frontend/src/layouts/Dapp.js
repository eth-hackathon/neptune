import React from "react";
import Sidebar from "components/Sidebar.js";

const Dapp = ({children}) => (
  <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar></Sidebar>

    {/* Content area */}
    <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <section>{children}</section>
    </main>
  </div>
);

export {Dapp};
