import { ethers } from "hardhat";

async function main() {
  // Get the signers (accounts) to deploy the contract
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy your contract here (example for UniswapV2Factory)
  const Token = await ethers.getContractFactory("UniswapV2Factory");
  const token = await Token.deploy(deployer.address);  // Pass constructor arguments if needed

  console.log("UniswapV2Factory deployed to:", token.address);

  // Deploy more contracts if needed in a similar manner
  // const OtherContract = await ethers.getContractFactory("OtherContract");
  // const otherContract = await OtherContract.deploy();
  // console.log("OtherContract deployed to:", otherContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
