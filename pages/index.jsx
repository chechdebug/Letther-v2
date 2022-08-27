import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";

import AppContainer from "../components/AppContainer/AppContainer";
const Home = () => {
  return (
    <div>
      <Head>
        <title>RainbowKit App</title>
        <meta name="description" content="Generated by @rainbow-me/create-rainbowkit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppContainer>
        <nav className="w-full flex items-center justify-between border-b-2 border-black/50">
          <h1>letter.xyz</h1>
          <ConnectButton />
        </nav>
      </AppContainer>
    </div>
  );
};

export default Home;
