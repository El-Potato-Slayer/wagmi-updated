import '@/styles/globals.css'
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

import { Web3Modal } from '@web3modal/react'
import { BSC, Goerli, Sepolia } from '@/chain';

const projectId = '002e902fa56196e08f66137e6f87ba90'

const chains = [BSC, Sepolia, Goerli];

console.log('chains app', chains);

const { provider } = configureChains(
  chains,
  [w3mProvider({ projectId })]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId: projectId, version: "2", appName: "LGCT", chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
