const fs = require("fs");
const colors = require("colors");
const SHARKBABYToken = require("../artifacts/contracts/sharkbaby.sol/SHARKBABYOKEN.json");
const Staking = require("../artifacts/contracts/staking.sol/Staking.json");
const { ethers } = require("hardhat");
const ERC20ABI =
	require("../artifacts/contracts/dexfactory.sol/IERC20.json").abi;

async function main() {
	// get network
	var [owner] = await ethers.getSigners();

	let network = await owner.provider._networkPromise;
	let chainId = network.chainId;

	console.log(chainId, owner.address);

	var exchangeRouter;
	var exchangeFactory;
	var wETH;

	var WETH_;
	var USDT_;
	var USDC_;


	// if (chainId === 5 || chainId === 4002 || chainId === 1337 || chainId === 26 || chainId === 1287 || chainId === 11155111) {
	// 	/* ----------- factory -------------- */
	// 	//deploy factory contract for test
	// 	const Factory = await ethers.getContractFactory("DEXSwapFactory");
	// 	exchangeFactory = await Factory.deploy(owner.address);
	// 	await exchangeFactory.deployed();
	// 	console.log(await exchangeFactory.INIT_CODE_PAIR_HASH());

	// 	console.log("exchangeFactory", exchangeFactory.address.yellow);
	// 	/* ----------- WETH -------------- */
	// 	//deploy WETH contract for test
	// 	const WETH = await ethers.getContractFactory("WETH");
	// 	wETH = await WETH.deploy();
	// 	await wETH.deployed();

	// 	console.log("WETH", wETH.address.yellow);

	// 	/* ----------- Router -------------- */
	// 	//deploy Router contract for test
	// 	const Router = await ethers.getContractFactory("DEXSwapRouter");
	// 	exchangeRouter = await Router.deploy(
	// 		exchangeFactory.address,
	// 		wETH.address
	// 	);
	// 	await exchangeRouter.deployed();

	// 	console.log("exchangeRouter", exchangeRouter.address.yellow);
	// }
	// else {
	// 	// if it is binance smart chain, it use DEXSwap contract
	// 	// exchangeRouter = {
	// 	// 	address: "0x8e12fD09f7A761AABaD0C8E0e574d797FE27b8A6",
	// 	// };
	// 	// sharkToken = { address: process.env.SHARKADDRESS };
	// 	// babyToken = { address: process.env.BABYADDRESS };
	// }

	// eslint-disable-next-line no-lone-blocks
	// {

	/* ----------- ERC20 TOKEN -------------- */
	{

		// // const exchangeRouter = ethers.getContractAt("DEXSwapRouter", "0xFa921174629B2b637a9b74dA1860cE13f48c7173");
		// const exchangeRouter = await (await ethers.getContractFactory("DEXSwapRouter")).attach("0xd4eBd025e04590426550d0A6fD657f50A1750eeF")
		// const WETH_ = await (await ethers.getContractFactory("ERC20_WETH")).attach("0x9865b1dE34261e45761866Dc00496DD6fC9924b1")
		// // 0xbd08A0670F25782345521f46b9D6b2210e2D8372
		// const USDT_ = await (await ethers.getContractFactory("ERC20_USDT")).attach("0xbd08A0670F25782345521f46b9D6b2210e2D8372")

		// WETH and USDT token
		// const ERC20_WETH = await ethers.getContractFactory("ERC20_WETH");
		// WETH_ = await ERC20_WETH.deploy("WETH", "WETH");
		// await WETH_.deployed();
		// console.log("WETH_", WETH_.address.yellow);

		const ERC20_USDT = await ethers.getContractFactory("ERC20_USDT");
		const ERC20_USDC = await ethers.getContractFactory("ERC20_USDT");
		USDT_ = await ERC20_USDT.deploy("USDT", "USDT");
		USDC_ = await ERC20_USDC.deploy("USDC", "USDC");
		await USDT_.deployed();
		await USDC_.deployed();
		console.log("USDT_", USDT_.address.yellow);
		console.log("USDC_", USDC_.address.yellow);
		// var tx = await USDT_.approve(
		// 	exchangeRouter.address,
		// 	"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
		// );
		// await tx.wait();
		console.log('done'.green)

		// var tx = await WETH_.approve(
		// 	exchangeRouter.address,
		// 	"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
		// );
		// await tx.wait();
		// console.log('done')


		// tx = await exchangeRouter.addLiquidity(
		// 	USDT_.address,
		// 	WETH_.address,
		// 	ethers.utils.parseUnits("2000000", 'ether'),
		// 	ethers.utils.parseUnits("1000", 'ether'),
		// 	0,
		// 	0,
		// 	owner.address,
		// 	"111111111111111111111"
		// );
		// await tx.wait();
		// console.log('done---')
	}

}

main()
	.then(() => {
		console.log("complete".green);
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
