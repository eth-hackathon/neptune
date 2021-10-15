import React, {useState, useEffect} from "react";
import {useDappContext} from "context/dappContext";
import linkIcon from "image/link.svg";
import discord from "image/discord.svg";
import twitter from "image/twitter.svg";

import {useParams} from "react-router-dom";

const getProtocolInfo = (protocolName, protocol, serverDid) => {
  const {name, description, logo, appUrl, socialMedia} = protocol;
  // if protocol is undefined, need to get data from idx for the specific protocol
  // based on protocolName
  // also I need to use useEffect to async load the stream for epoch stat and users

  return {
    name,
    logo,
    description,
    protocolLink: appUrl,
    twitterLink: socialMedia[0].url,
    discordLink: socialMedia[1].url,
    rewardsLocked: "15k $",
    votesNumber: 0,
  };
};

const Protocol = ({location}) => {
  const {serverDid, authenticatedClients} = useDappContext();
  /* Get protocolName from Params */
  const {protocolName} = useParams();
  let {
    name,
    logo,
    description,
    rewardsLocked,
    votesNumber,
    protocolLink,
    twitterLink,
    discordLink,
  } = getProtocolInfo(protocolName, location.protocolProps, serverDid);

  const [contributorsNum, setContributorsNum] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    async function addProtocolToIDX() {
      const {idx} = authenticatedClients;
      let {protocols} = await idx.get("profil");

      if (!isRegistered && protocols && protocols.includes(name)) {
        setIsRegistered(true);
        setContributorsNum((prevNum) => prevNum + 1);
      } else if (isRegistered) {
        if (protocols && protocols.includes(name)) return;

        protocols = protocols ? [...protocols, name] : [name];
        idx.set("profil", {protocols});
      }
    }
    addProtocolToIDX();
  }, [isRegistered, authenticatedClients, name]);

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
          <p className="text-xl font-bold text-center">{contributorsNum}</p>
        </div>
        <div>
          <p className="text-xl font-bold text-center">Number of votes</p>
          <p className="text-xl font-bold text-center">{votesNumber}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-20">
        {!isRegistered && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"
            onClick={() => {
              setIsRegistered(true);
              setContributorsNum(contributorsNum + 1);
            }}
          >
            Register
          </button>
        )}
        {isRegistered && (
          <button className="bg-gray-500 text-white font-bold py-2 px-4 m-4 rounded pointer-events-none">
            Registered
          </button>
        )}
      </div>
    </main>
  );
};

export default Protocol;
