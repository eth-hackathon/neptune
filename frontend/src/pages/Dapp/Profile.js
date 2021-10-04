import {getUser, addUser} from "../../api/index";

const Profile = (props) => {
  const submit = async () => {
    const streamId = await addUser({
      stackID: "123456",
      ethAddr: "0xEF13aAC4dBCF336Ed855a0Ee4166117332501C75",
      protocols: ["uniswap", "sushiswap"],
    });
    console.log("streamId =>", streamId);
    const stream = await getUser({
      streamId: streamId.data,
    });
    console.log("stream is : ", stream.data);
  };

  return (
    <main>
      <h1>Profile page</h1>
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
