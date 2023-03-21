require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_KEY = process.env.INFURA_KEY;
const INFURA_URL = process.env.INFURA_GOERLI_API_URL;
const GOERLI_RPC_URL = "https://goerli.infura.io/v3/65c757617b5049f19ed15d20b4031ae3"; //`${INFURA_URL}${INFURA_KEY}`;
console.log(INFURA_KEY)

// Beware: NEVER put real Ether into testing accounts.
const MM_PRIVATE_KEY = process.env.METAMASK_2_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "localhost",
  etherscan: {
    apiKey: "QH8TU1FQKS71CSZJ4EXA86QVR9NNWRNVHC",
  },
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [ "c6424cfccfe8dbe72ce9d0b8039218695dcb6ddefd17028fe58d5ee10160d6df" ],
    }
    // unima1: {
    //   url: process.env.NOT_UNIMA_URL_2,
    //   accounts: [ MM_PRIVATE_KEY ],
    // },
    // unima2: {
    //   url: process.env.NOT_UNIMA_URL_2,
    //   accounts: [ MM_PRIVATE_KEY ],
    // },
  },
};


