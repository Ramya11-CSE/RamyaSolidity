import hre from "hardhat";

async function main() {
  const connection = await hre.network.getOrCreate();
  const { ethers } = connection;

  console.log("Deploying DCF contract...");

  // Match the exact contract name inside your Solidity file
  const DCF = await ethers.getContractFactory("DCF");
  const dcf = await DCF.deploy();

  await dcf.waitForDeployment();

  const contractAddress = await dcf.getAddress();
  const ownerAddress = await dcf.owner();

  console.log("Contract deployed successfully!");
  console.log(`Contract Address : ${contractAddress}`);
  console.log(`Owner Address    : ${ownerAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});