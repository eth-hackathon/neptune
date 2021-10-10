const connect = async () => {
  const addresses = await window.ethereum?.request({
    method: "eth_requestAccounts",
  });
  return addresses;
};

export {connect};
