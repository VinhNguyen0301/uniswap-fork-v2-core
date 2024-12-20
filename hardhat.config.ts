import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'

dotenv.config()

import { alchemyApiKey, mnemonic, apiKey } from './secrets.json'

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.28'
      },
      {
        version: '0.5.16'
      }
    ]
  }, // Ensure this matches your contract's Solidity version
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: {
        mnemonic: mnemonic // Using mnemonic to derive accounts
      }
    }
  },
  etherscan: {
    apiKey: apiKey,
  },
}

export default config
