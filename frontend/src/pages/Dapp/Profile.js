import logo from "image/uniswap-logo.png";

const getRewardsInfo = () => {
  /* Backend connection to pull this data */
  /* const gbhrtgerfds = Api.get....... */

  /* Hardcoded at the moment */
  return [
    {
      protocolName: "Uniswap",
      tokenAmount: 10,
      tokenValueUsd: 250,
    },
    {
      protocolName: "Uniswap",
      tokenAmount: 10,
      tokenValueUsd: 250,
    },
    {
      protocolName: "Uniswap",
      tokenAmount: 10,
      tokenValueUsd: 250,
    },
  ];
};

const ProfileCard = ({children}) => {
  return <div className="rounded-lg bg-white p-4 shadow-md">{children}</div>;
};

const Profile = () => {
  const rewards = getRewardsInfo();

  return (
    <main className="grid place-content-center h-full">
      <div className="flex flex-row space-x-20">
        {rewards.map(({protocolName, tokenAmount, tokenValueUsd}, i) => (
          <ProfileCard key={i}>
            <div className="flex flex-col items-center">
              {/* Logo & Name */}
              <div className="flex flex-row items-center">
                <img
                  className="bg-gray-100 rounded-full w-10 h-10 mr-2"
                  src={logo}
                  alt="Uniswap Logo"
                />
                <span className="text-lg font-semibold">{protocolName}</span>
              </div>

              {/* Amount */}
              <p className="mt-5">
                <span className="font-bold">{tokenAmount}</span>
                <span className="text-gray-500"> (${tokenValueUsd})</span>
              </p>

              {/* Claim button */}
              <div className="mt-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                  Claim
                </button>
              </div>
            </div>
          </ProfileCard>
        ))}
      </div>
    </main>
  );
};

export default Profile;
