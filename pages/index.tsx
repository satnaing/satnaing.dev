import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="h-[1800px]">
      <Header />
    </div>
  );
};

export default Home;
