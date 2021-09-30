import logo from "image/uniswap-logo.png";
import linkIcon from "image/link.svg";
import discord from "image/discord.svg";
import twitter from "image/twitter.svg";
import {useParams} from "react-router-dom";

const Protocol = () => {
  //   const {protocolName} = useParams();  return Undefined in this configuration
  return (
    <main className="px-14 flex flex-col">
      <div className="rounded-lg mt-5 p-5 bg-white">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center ">
            <img
              className="bg-gray-100 rounded-full w-20 h-20 "
              src={logo}
              alt="uniswap-log"
            />
            <p className="text-4xl font-bold pl-10">Uniswap</p>
          </div>
          <div className="flex flex-row justify-around gap-x-3 ">
            <button className="w-5 h-5">
              <img src={linkIcon} alt="link-icon" />
            </button>
            <button className="w-5 h-5">
              <img src={discord} alt="discord-icon" />
            </button>
            <button className="w-5 h-5">
              <img src={twitter} alt="twitter-icon" />
            </button>
          </div>
        </div>
        <p className="text-xl pt-5">A decentralized protocol for automated liquidity.</p>
      </div>
      <div className="rounded-lg flex flex-row justify-around mt-5 p-5 bg-white">
        <p className="font-semibold">Reward locked</p>
        <p className="font-semibold">Number of contributors</p>
        <p className="font-semibold">Number of votes</p>
      </div>
    </main>
  );
};

export default Protocol;
