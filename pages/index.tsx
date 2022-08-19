import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Columns from "../components/Columns";

const Home: NextPage = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const handleThemeToggle = ()  => {
    setDarkTheme(prev => !prev)
  }
  useEffect(() => {
    document.documentElement.dataset.theme = darkTheme ? 'dark' : 'white'
  }, [darkTheme])
  const copyrightYear = `${new Date().getFullYear()}`;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Welcome to Blist</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📘</text></svg>"
        />
      </Head>
      <main>
        <div className="mb-4">
          <label className="flex gap-4">
            <span className="label-text">Dark Theme</span>
            <input type="checkbox" checked={darkTheme}  className="checkbox" onClick={handleThemeToggle}/>
          </label>
        </div>
        <Columns />
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
