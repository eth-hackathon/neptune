import uniswapLogo from "image/uniswap.png";
import aaveLogo from "image/aave.png";
import ceramicLogo from "image/ceramic.png";

import {useDappContext} from "context/dappContext";

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
  const {ethAddress, hasStackAuth} = useDappContext();

  /* StackEchange */
  const stackexchangeURL =
    "https://stackexchange.com/oauth/dialog?client_id=20956&scope=&redirect_uri=";

  // `redirect_uri` needs to be changed once we go live
  // const redirect_uri = "https://hackaton-neptune.netlify.app/dapp";
  // const redirect_uri = "https://tolocalhost.com/?hostname=localhost:3000/dapp/profile";
  const redirect_uri = "https://hackaton-neptune.netlify.app/dapp/profile";
  const fullURL = `${stackexchangeURL}${redirect_uri}`;

  /* Current rewards */
  const rewards = getRewardsInfo();

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
