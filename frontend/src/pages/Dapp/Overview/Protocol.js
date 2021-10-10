import logo from "image/uniswap-logo.png";
import linkIcon from "image/link.svg";
import discord from "image/discord.svg";
import twitter from "image/twitter.svg";

import {useParams} from "react-router-dom";

const getProtocolInfo = (protocolName) => {
  /* Backend connection to pull this data */
  /* const fgtrtgref = Api.get....... */

  /* Hardcoded at the moment */
  return {
    name: protocolName,
    description: "A decentralized protocol for automated liquidity.",
    protocolLink: "https://uniswap.org/",
    discordLink: "https://discord.gg/FCfyBSbCU5",
    twitterLink: "https://twitter.com/Uniswap",
    rewardsLocked: "15k $UNI",
    contributorsNumber: "2532",
    votesNumber: "999",
  };
};

const Protocol = () => {
  /* Get protocolName from Params */
  const {protocolName} = useParams();

  /* Get protocol info */
  const {
    name,
    description,
    rewardsLocked,
    contributorsNumber,
    votesNumber,
    protocolLink,
    twitterLink,
    discordLink,
  } = getProtocolInfo(protocolName);

  return (
    <main className="flex flex-col">
      <div className="rounded-lg p-5 bg-white">
        <div className="flex flex-row justify-between items-center">
          {/* Protocol Logo & Name */}
          <div className="flex flex-row items-center ">
            <img
              className="bg-gray-100 rounded-full w-16 h-16 "
              src={logo}
              alt="uniswap-logo"
            />
            <p className="text-3xl font-bold ml-10 capitalize">{name}</p>
          </div>

          {/* External Links */}
          <div className="flex flex-row justify-around gap-x-3 ">
            <a
              href={protocolLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5"
            >
              <img src={linkIcon} alt="link-icon" />
            </a>
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5"
            >
              <img src={discord} alt="discord-icon" />
            </a>
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5"
            >
              <img src={twitter} alt="twitter-icon" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg font-light mt-5">{description}</p>
      </div>

      {/* Procol Info */}
      <div className="rounded-lg flex flex-row justify-around mt-5 p-5 bg-white">
        <div>
          <p className="text-xl font-bold text-center">Reward locked</p>
          <p className="text-xl font-bold text-center">{rewardsLocked}</p>
        </div>
        <div>
          <p className="text-xl font-bold text-center">Number of contributors</p>
          <p className="text-xl font-bold text-center">{contributorsNumber}</p>
        </div>
        <div>
          <p className="text-xl font-bold text-center">Number of votes</p>
          <p className="text-xl font-bold text-center">{votesNumber}</p>
        </div>
      </div>
    </main>
  );
};

export default Protocol;
