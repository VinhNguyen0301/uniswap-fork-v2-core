import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

import { alchemyApiKey, mnemonic } from "./secrets.json";

const config: HardhatUserConfig = {
  solidity: "0.8.28",  // Ensure this matches your contract's Solidity version
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: {
        mnemonic: mnemonic,  // Using mnemonic to derive accounts
      },
    },
  },
};

export default config;
