import { bscTestnet, sepolia, goerli, mainnet, bsc } from 'wagmi/chains';
import abiUSDT from './usdt_abi.json';
import abiBUSD from './busd_abi.json';
import abiUSDC from './usdt_abi.json';

// const customBSCTestnet = {
//   ...bsc,
//   ico_address: '0xC9608Fb99b048ef9B031eE12A34776c50d89A7EE',
//   stable_coin_address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
//   stable_coin_name: 'BUSD',
//   exponent: 18,
//   abi: abiBUSD,
//   id: 56
// }
// const customSepolia = {
//   ...mainnet,
//   ico_address: '0xEAc6748A13Ef82fDB95352020F78f982Cea09f03',
//   stable_coin_address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
//   stable_coin_name: 'USDT',
//   exponent: 6,
//   abi: abiUSDT,
//   id: 1
// }
// const customGoerli = {
//   ...mainnet,
//   ico_address: '0xF194baD7A9F22F091eB7B0b3F894f8Cb56d5016C',
//   stable_coin_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
//   stable_coin_name: 'USDC',
//   exponent: 6,
//   abi: abiUSDC,
//   id: 1
// }

const BSC = {
  ...bsc,
  ico_address: '0xC9608Fb99b048ef9B031eE12A34776c50d89A7EE',
  stable_coin_address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  stable_coin_name: 'BUSD',
  exponent: 18,
  abi: abiBUSD,
  id: 56
}
const Sepolia = {
  ...mainnet,
  ico_address: '0xEAc6748A13Ef82fDB95352020F78f982Cea09f03',
  stable_coin_address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  stable_coin_name: 'USDT',
  exponent: 6,
  abi: abiUSDT,
  id: 1
}
const Goerli = {
  ...mainnet,
  ico_address: '0xF194baD7A9F22F091eB7B0b3F894f8Cb56d5016C',
  stable_coin_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  stable_coin_name: 'USDC',
  exponent: 6,
  abi: abiUSDC,
  id: 1
}

export { BSC, Sepolia, Goerli }