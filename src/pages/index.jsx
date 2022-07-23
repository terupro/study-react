import classes from "src/styles/Home.module.css";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect } from "react";

export default function Home() {
  const handleClick = useCallback((e) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント");
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
