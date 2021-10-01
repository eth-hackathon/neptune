import {useDappContext} from "context/dappContext";

const Settings = () => {
  const value = useDappContext();

  return (
    <main>
      <h1>Settings page {value}</h1>
    </main>
  );
};

export default Settings;
