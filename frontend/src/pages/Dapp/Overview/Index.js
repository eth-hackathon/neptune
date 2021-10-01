import logo from "image/uniswap-logo.png";
/* import linkIcon from "image/link.svg";
import discord from "image/discord.svg";
import twitter from "image/twitter.svg"; */
import {NavLink} from "react-router-dom";

const ProtocolCard = ({to, logo, alt, name}) => {
  const url = `/dapp/overview/uniswap/${to}`;

  return (
    <NavLink to={url}>
      <div className="rounded-lg bg-white p-5">
        <div className="flex flex-col items-center">
          <img className="bg-gray-100 rounded-full w-20 h-20 m-3" src={logo} alt={alt} />
          <p className="text-3xl font-bold">{name}</p>
        </div>
      </div>
    </NavLink>
  );
};

const Index = () => {
  return (
    <main className="px-14 mt-5 flex-col grid grid-cols-4 gap-6">
      {[...Array(5)].map((_, i) => (
        <ProtocolCard
          to="uniswap"
          logo={logo}
          alt="Uniswap Logo"
          name="Uniswap"
          key={i}
        />
      ))}
    </main>
  );
};

export {Index};
