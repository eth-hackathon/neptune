import logo from "image/uniswap-logo.png";
import linkIcon from "image/link.svg";
import discord from "image/discord.svg";
import twitter from "image/twitter.svg";
import {NavLink} from "react-router-dom";

const Overview = () => {
  return (
    <main className="px-14 flex-col grid grid-cols-4 gap-6">
      <NavLink to="/dapp/overview/uniswap">
        <div className="rounded-lg mt-5 p-5 bg-white">
          <div className="flex flex-col items-center">
            <img
              className="bg-gray-100 rounded-full w-16 h-16"
              src={logo}
              alt="uniswap-logo"
            />
            <p className="text-2xl font-semibold">Uniswap</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/dapp/overview/uniswap">
        <div className="rounded-lg mt-5 p-5 bg-white">
          <div className="flex flex-col items-center">
            <img
              className="bg-gray-100 rounded-full w-16 h-16"
              src={logo}
              alt="uniswap-logo"
            />
            <p className="text-2xl font-semibold">Uniswap</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/dapp/overview/uniswap">
        <div className="rounded-lg mt-5 p-5 bg-white">
          <div className="flex flex-col items-center">
            <img
              className="bg-gray-100 rounded-full w-16 h-16"
              src={logo}
              alt="uniswap-logo"
            />
            <p className="text-2xl font-semibold">Uniswap</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/dapp/overview/uniswap">
        <div className="rounded-lg mt-5 p-5 bg-white">
          <div className="flex flex-col items-center">
            <img
              className="bg-gray-100 rounded-full w-16 h-16"
              src={logo}
              alt="uniswap-logo"
            />
            <p className="text-2xl font-semibold">Uniswap</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/dapp/overview/uniswap">
        <div className="rounded-lg mt-5 p-5 bg-white">
          <div className="flex flex-col items-center">
            <img
              className="bg-gray-100 rounded-full w-16 h-16"
              src={logo}
              alt="uniswap-logo"
            />
            <p className="text-2xl font-semibold">Uniswap</p>
          </div>
        </div>
      </NavLink>
    </main>
  );
};

export default Overview;
