import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <footer className="py-8 text-center">
        Copyright ©2023 All rights reserved | Designed by Abhishek Raj Poudel
      </footer>
    </div>
  );
};

export default Home;
