import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {

  const [count , setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  // コンポネント内に書くパターンは再レンダリング時に再生成されるデメリットがある
  // コンポネントの外に書くと引数を渡すことが必要になったりして煩雑になる可能性もある
  // useCallbackで再レンダリング時に生成されないのでパフォーマンスが向上する
  const handleClick = useCallback((e) => {
    // 前の状態を用いてそれに対して処理を行いたい場合は関数で記載する
    if (count < 10) {
      console.log(count)
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    // マウント時の処理
    // このようにDOM要素に直接アクセスするのはNGだったりする
    console.log(`マウント時：${count}`);
    
    document.body.style.backgroundColor = 'lightblue';
  
    // アンマウント時の処理
    // クリーンアップファンクションとも呼ばれる
    return () => {
      console.log(`アマウント時：${count}`)
      document.body.style.backgroundColor = '';
    }
    // 第2引数を設定すると変数が変更されたタイミングで改めてuseEffectの処理が実行される
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字まで！");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback((isShow) => {
    // 前回の値を使いたいときは関数にする
    setIsShow((isShow) => !isShow);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      {/* reactではif文を使えないので三項演算子を使う */}
      {isShow ? <h1>{count}</h1> : null} 
      <button href='/about'
        onClick={handleClick}
        >ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text}
      onChange={handleChange}/>
      <Main page="index" />
      <Footer />
    </div>
  )
}
