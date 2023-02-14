require("dotenv").config();
const { ethers, InfuraProvider, Contract, Wallet } = require("ethers");

//creating provider
const provider = new InfuraProvider("goerli");
const abi = require("./contracts/Hello.json");

//creating new wallet signer
const signer = Wallet.fromPhrase(process.env.SEED_PHRASE, provider);

//creating new contract instance
const contract = new Contract(
  "0x3bcD1e13f1fcDFB8829D3Fbc964A812639c713F7",
  abi,
  signer
);

const readNumber = async () => {
  const value = await contract.retrieve();
  console.log("value is ", value);
};

readNumber();

const storeNumber = async () => {
  const storeTxn = await contract.store("100");
  const result = await storeTxn.wait();
  console.log("result is ", result);
};

// storeNumber();
