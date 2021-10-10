import logo from "image/uniswap-logo.png";
/* import linkIcon from "image/link.svg";
import discord from "image/discord.svg";
import twitter from "image/twitter.svg"; */
import {NavLink} from "react-router-dom";

const getAvailableProtocols = () => {
  /* Backend connection to pull this data */
  /* const gbhrtgerfds = Api.get....... */

  /* Hardcoded at the moment */
  return [
    {
      to: "uniswap",
      logo: logo,
      alt: "Uniswap Logo",
      name: "Uniswap",
    },
    {
      to: "uniswap",
      logo: logo,
      alt: "Uniswap Logo",
      name: "Uniswap",
    },
    {
      to: "uniswap",
      logo: logo,
      alt: "Uniswap Logo",
      name: "Uniswap",
    },
    {
      to: "uniswap",
      logo: logo,
      alt: "Uniswap Logo",
      name: "Uniswap",
    },
  ];
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
  const protocols = getAvailableProtocols();

  return (
    <main className="grid grid-cols-4 gap-6">
      {protocols.map(({to, logo, alt, name}, i) => (
        <ProtocolCard to={to} logo={logo} alt={alt} name={name} key={i} />
      ))}
    </main>
  );
};

export {Index};
