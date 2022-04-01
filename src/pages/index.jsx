import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {

  const [count , setCount] = useState(1);
  // let foo = 1;


  // コンポネント内に書くパターンは再レンダリング時に再生成されるデメリットがある
  // コンポネントの外に書くと引数を渡すことが必要になったりして煩雑になる可能性もある
  // useCallbackで再レンダリング時に生成されないのでパフォーマンスが向上する
  const handleClick = (e) => {
    // foo += 1;
    // console.log(foo)
    // 前の状態を用いてそれに対して処理を行いたい場合は関数で記載する
    setCount((count) => count + 1);
  };

  useEffect(() => {
    // マウント時の処理
    // このようにDOM要素に直接アクセスするのはNGだったりする
    console.log('マウント')
    document.body.style.backgroundColor = 'lightblue';
  
    // アンマウント時の処理
    return () => {
      console.log('アンマウント')
      document.body.style.backgroundColor = '';
    }
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button href='/about'
        onClick={handleClick}
        //  onClick={() => alert(123)} 
        >ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
