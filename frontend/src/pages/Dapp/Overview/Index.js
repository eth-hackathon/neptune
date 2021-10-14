import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useDappContext} from "context/dappContext";

const images = require.context("image", true);

const getAvailableProtocols = async (readOnlyClients, serverDid) => {
  console.log(readOnlyClients);
  const {ceramic, idx} = readOnlyClients;
  try {
    const {list} = await idx.get("protocolsList", serverDid);
    const result = [];
    for (const item of list) {
      const {content} = await ceramic.loadStream(item.id);
      const img = images(`./${content.name}.png`).default;
      content.logo = img;
      result.push(content);
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

const ProtocolCard = ({to, logo, name}) => {
  const url = `/dapp/overview/${to}`;
  return (
    <NavLink to={url}>
      <div className="rounded-lg bg-white p-5 shadow-md">
        <div className="flex flex-col items-center">
          <img className="bg-gray-100 rounded-full w-16 h-16 m-3" src={logo} alt="" />
          <p className="text-2xl font-bold">{name}</p>
        </div>
      </div>
    </NavLink>
  );
};

const Index = () => {
  const {serverDid, readOnlyClients} = useDappContext();
  const [protocols, setProtocols] = useState([]);

  /* Tricky situation because the DappContext is slow to charge so the useEffect
   * is being trigger before the data is available. That's why I'm checking if
   * serverDid exist and I added it to the array in the end so that useEffect
   * is trigger everytime this data change.
   *
   * To be honest it doesn't seem to be a good idea because every time I change
   * page and come back to Overview, the useEffect is trigger.
   */
  useEffect(() => {
    async function getProtocols() {
      if (serverDid) {
        let data = await getAvailableProtocols(readOnlyClients, serverDid);
        setProtocols(data);
      }
    }

    getProtocols();
  }, [serverDid, readOnlyClients]);

  return (
    <main className="grid grid-cols-3 gap-6 px-10 pt-10">
      {protocols.map(({logo, name}, i) => (
        <ProtocolCard to={name} logo={logo} name={name} key={i} />
      ))}
    </main>
  );
};

export {Index};
