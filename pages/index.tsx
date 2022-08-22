import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Columns from "../components/Columns";
import Navbar from "../components/Navbar";
import SearchUI from "../components/SearchUI";

const Home: NextPage = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  const [searchUIShow, setSearchUIShow] = useState(false)
  useEffect(() => {
    document.documentElement.dataset.theme = darkTheme ? 'dark' : 'light'
  }, [darkTheme])
  const copyrightYear = `${new Date().getFullYear()}`;
  return (
    <div className="">
      <Head>
        <title>Welcome to Blist</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📘</text></svg>"
        />
      </Head>
      <Navbar setSearchUIShow={setSearchUIShow} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main className="mb-8">
        <Columns />
        { searchUIShow &&
          <SearchUI setSearchUIShow={setSearchUIShow}/>
        }
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="flex items-center justify-center gap-2">
          &copy; Copyright <strong>📘Blist</strong>{" "}
          <span id="copyright-year">{copyrightYear}.</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
