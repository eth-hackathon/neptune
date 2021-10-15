import uniswapLogo from "image/uniswap.png";
import aaveLogo from "image/aave.png";
import ceramicLogo from "image/ceramic.png";

import {useDappContext} from "context/dappContext";
import {useEffect, useState} from "react";

// import {getUserInfo} from "api/external/stackExchange";

const getRewardsInfo = () => {
  /* Backend connection to pull this data */
  /* const gbhrtgerfds = Api.get....... */

  /* Hardcoded at the moment */
  return [
    {
      protocolName: "Uniswap",
      tokenAmount: 0,
      tokenValueUsd: 0,
      logo: uniswapLogo,
    },
    {
      protocolName: "Aave",
      tokenAmount: 0,
      tokenValueUsd: 0,
      logo: aaveLogo,
    },
    {
      protocolName: "Ceramic",
      tokenAmount: 0,
      tokenValueUsd: 0,
      logo: ceramicLogo,
    },
  ];
};

const ProfileCard = ({children}) => {
  return <div className="rounded-lg bg-white p-4 shadow-md">{children}</div>;
};

const Profile = () => {
  /* Context */
  const {ethAddress, hasStackAuth, authenticatedClients} = useDappContext();
  // const [isStackID, setIsStackID] = useState(false);

  const {idx} = authenticatedClients;
  // const apiSO = getUserInfo(idx);
  // console.log("apiSO:", apiSO);

  /* StackEchange */
  const stackexchangeURL =
    "https://stackexchange.com/oauth/dialog?client_id=20956&scope=&redirect_uri=";

  const currentHref = window.location.href;
  // eslint-disable-next-line no-control-regex
  const regex = new RegExp("\b(w*netlifyw*)\b");
  const inNetlify = regex.test(currentHref);

  let redirect_uri;
  if (inNetlify) {
    redirect_uri = "https://hackaton-neptune.netlify.app/dapp/profile";
  } else {
    redirect_uri = "https://tolocalhost.com/?hostname=localhost:3000/dapp/profile";
  }

  // Construct full stackexchangeURL with redirect uri depending on current environment
  const fullURL = `${stackexchangeURL}${redirect_uri}`;

  /* Current rewards */
  const rewards = getRewardsInfo();

  /*Use Effect to check if we have user's SO ID*/
  // useEffect(() => {
  //   if (ethAddress && hasStackAuth) {
  //     console.log("idx", idx);
  //     async function getStackID() {
  //       try {
  //         const {stackID} = await idx.get("profil");
  //         console.log("stackID1", stackID);
  //         if (stackID) {
  //           setIsStackID(true);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     getStackID();
  //   }
  // }, [authenticatedClients]);

  // useEffect(() => {
  //   if (setIsStackID) {
  //     const apiSO = getUserInfo(idx);
  //     console.log("apiSO:", apiSO);
  //   }
  // }, [isStackID]);

  /* RETURN COMPONENT */
  // User not connected
  if (!ethAddress) {
    return (
      <main className="grid place-content-center h-full">
        <p>Please connect your ETH Wallet.</p>
      </main>
    );
  }

  // User connected, no stackoverflow
  if (ethAddress && !hasStackAuth) {
    return (
      <main className="grid place-content-center h-full">
        <p className="text-center">Please connect to stackoverflow.</p>

        <a href={fullURL}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 m-4 rounded">
            Connect to stack exchange
          </button>
        </a>
      </main>
    );
  }

  // User connected and stackoverflow auth
  if (ethAddress && hasStackAuth) {
    //query idx to fget profile and if no data request SO
    //stack ID
    //key qui permet d'identifier à nos app sut stackapp
    return (
      <main>
        <p className="text-4xl font-bold text-gray-600 pl-16">
          Protocols you registered to :
        </p>
        <div className="grid grid-cols-3 gap-6 pt-16 pl-16">
          {rewards.map(({protocolName, tokenAmount, tokenValueUsd, logo}, i) => (
            <ProfileCard key={i}>
              <div className="flex flex-col items-center p-2 px-4">
                {/* Logo & Name */}
                <div className="flex flex-row items-center">
                  <img
                    className="bg-gray-100 rounded-full w-16 h-16 mr-2"
                    src={logo}
                    alt="Uniswap Logo"
                  />
                  <span className="text-2xl font-semibold">{protocolName}</span>
                </div>

                {/* Amount */}
                <p className="mt-5">
                  <span className="font-bold">{tokenAmount}</span>
                  <span className="text-gray-500"> (${tokenValueUsd})</span>
                </p>

                {/* Claim button */}
                <div className="mt-6">
                  <button className="bg-blue-100 hover:bg-blue-100 text-white font-bold py-1 px-4 rounded pointer-events-none">
                    Claim
                  </button>
                </div>
              </div>
            </ProfileCard>
          ))}
        </div>
      </main>
    );
  }
};

export default Profile;
