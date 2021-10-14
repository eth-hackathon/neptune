import React, {useState, useEffect} from "react";
import uniswapLogo from "image/uniswap-logo.png";
import aaveLogo from "image/aave.png";
import ceramicLogo from "image/ceramic.png";
import {NavLink} from "react-router-dom";
import {useDappContext} from "context/dappContext";

const getAvailableProtocols = async (readOnlyClients, serverDid) => {
  const {ceramic, idx} = readOnlyClients;
  try {
    const {list} = await idx.get("protocolsList", serverDid);

    const result = [];
    for (const item of list) {
      const stream = await ceramic.loadStream(item.id);
      result.push(stream.content);
    }
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

const ProtocolCard = ({to, logo, alt, name}) => {
  const url = `/dapp/overview/${to}`;

  return (
    <NavLink to={url}>
      <div className="rounded-lg bg-white p-5 shadow-md">
        <div className="flex flex-col items-center">
          <img className="bg-gray-100 rounded-full w-16 h-16 m-3" src={logo} alt={alt} />
          <p className="text-2xl font-bold">{name}</p>
        </div>
      </div>
    </NavLink>
  );
};

const Index = () => {
  const {serverDid, readOnlyClients} = useDappContext();
  const [protocols, setProtocols] = useState([
    {
      to: "uniswap",
      logo: uniswapLogo,
      alt: "Uniswap Logo",
      name: "Uniswap",
    },
    {
      to: "aave",
      logo: aaveLogo,
      alt: "Uniswap Logo",
      name: "Aave",
    },
    {
      to: "ceramic",
      logo: ceramicLogo,
      alt: "Uniswap Logo",
      name: "Ceramic",
    },
  ]);

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
        console.log(data);
        setProtocols(data);
      }
    }

    getProtocols();
  }, [serverDid, readOnlyClients]);

  return (
    <main className="grid grid-cols-3 gap-6 px-10 pt-10">
      {protocols.map(({logo, alt, name}, i) => (
        <ProtocolCard to={name} logo={logo} alt={alt} name={name} key={i} />
      ))}
    </main>
  );
};

export {Index};
