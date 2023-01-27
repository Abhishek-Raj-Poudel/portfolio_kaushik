import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className=" ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <footer className="py-8 text-center">
        Copyright ©2023 All rights reserved | Designed by Abhishek Raj Poudel
      </footer>
    </div>
  );
};

export default Home;
