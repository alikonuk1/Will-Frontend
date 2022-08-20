const getFactoryAddress = (chainId) => {
  if (chainId === 5) {
    // Goerli
    return "0xE7FC95F479Ae77ad12D1f2A3Ca30B8c6368Db610";
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
