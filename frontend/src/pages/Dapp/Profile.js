import {exampleGet, examplePost} from "../../api/index";

const Profile = (props) => {
  const submit = async () => {
    var result = await exampleGet({tag: "url params"});
    console.log("result =>", result);
    result = await examplePost({tag: "The tag"});
    console.log("result =>", result);
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
