const getFactoryAddress = (chainId) => {
  if (chainId === 5) {
    // Goerli
    return "0x7E0175Bc795c117E6f01B2E4e5dCb85bd7EFae29";
  }
  if (chainId === 137) {
    // Polygon
    return "";
  }
  if (chainId === 80001) {
    // Polygon Mumbai
    return "";
  }
  return "0x000000000000000000000000000000000000dEaD";
};

export default getFactoryAddress;
