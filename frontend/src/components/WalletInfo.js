const WalletInfo = ({connectToCeramic, loading, ceramicId}) => {
  return (
    <div className="flex flex-row justify-end">
      {/* We could add info like number of token or network */}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"
        onClick={connectToCeramic}
      >
        {loading ? "Connecting..." : ceramicId === "" ? "Connect Wallet" : "Connected"}
      </button>
    </div>
  );
};

export default WalletInfo;
