import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="about" />
      <Footer />
    </div>
  );
}
