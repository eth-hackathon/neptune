const WalletInfo = ({connectToEth, loading, ethAddress}) => {
  let displayAddress = "";
  if (ethAddress !== "") {
    const firstLetters = ethAddress?.slice(0, 5);
    const lastLetters = ethAddress?.slice(-5);

    displayAddress = `${firstLetters}...${lastLetters}`;
  }

  return (
    <div className="flex flex-row justify-end">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"
        onClick={connectToEth}
      >
        {loading
          ? "Connecting..."
          : displayAddress === ""
          ? "Connect Wallet"
          : displayAddress}
      </button>
    </div>
  );
};

export default WalletInfo;
