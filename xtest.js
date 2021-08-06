const ethers = require("ethers");
const crypto = require("crypto");

const id = crypto.randomBytes(32).toString("hex");
const privateKeyEth =
  "0xba3c5df813b68c797539185c246364b04fbb6c0b00eae6f89b4a394fb2e78f08";
console.log(privateKeyEth);

const walletEth = new ethers.Wallet(privateKeyEth);
console.log(walletEth);
