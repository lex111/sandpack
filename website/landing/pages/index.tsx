import type { NextPage } from "next";
import Head from "next/head";

import { styled } from "../stitches.config";

const Text = styled("p", {
  color: "#6FEC5B",
});

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Sandpack</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Text as="h1">hello, world.</Text>
    </section>
  );
};

export default Home;
