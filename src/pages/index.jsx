import classes from "src/styles/Home.module.css";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = () => {
    setIsShow((isShow) => !isShow);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
      <Footer />
    </div>
  );
}
