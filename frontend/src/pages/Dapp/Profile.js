import {getUser, addUser, getServerDID} from "../../api/index";
import {useDappContext} from "context/dappContext";
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
  const idx = useDappContext();

  const submit = async () => {
    try {
      // this should be query once when we launch the App and stored in the Context
      // it's the DID (ID) of our ceramic backend, we need to input it to query
      // data as shown below
      const did = await getServerDID();
      console.log(did);

      // this create a user and store it on our ceramic backend
      await addUser({
        stackID: "123456",
        ethAddr: "0xEF13aAC4dBCF336Ed855a0Ee4166117332501C75",
        protocols: ["uniswap", "sushiswap"],
      });

      // this query the list of all our user with some info. not efficient now
      // will change this soon
      const res = await idx.get("profilListDef", did);
      console.log("res : ", res);
    } catch (error) {
      console.log(error);
    }
  };

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

      {/* the redirect URL can not be the localhost, as a trick we are using
          tolocalhost.com that will redirect the query to our localhost */}
      <a href="https://stackexchange.com/oauth/dialog?client_id=20956&scope=&redirect_uri=https://tolocalhost.com">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 m-4 rounded">
          Connect to stack exchange
        </button>
      </a>

      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 m-4 rounded"
        onClick={submit}
      >
        test backend
      </button>
    </main>
  );
};

export default Profile;
