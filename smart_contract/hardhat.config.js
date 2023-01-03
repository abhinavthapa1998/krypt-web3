require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/`,
      accounts: ["123"],
    },
  },
};
