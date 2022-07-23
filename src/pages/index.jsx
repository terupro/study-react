import classes from "src/styles/Home.module.css";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
