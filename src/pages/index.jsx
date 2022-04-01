import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect } from 'react'

export default function Home() {

  // const foo = 1;

  // コンポネント内に書くパターンは再レンダリング時に再生成されるデメリットがある
  // コンポネントの外に書くと引数を渡すことが必要になったりして煩雑になる可能性もある
  // useCallbackで再レンダリング時に生成されないのでパフォーマンスが向上する
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

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
      {/* <a href='/about'
        onClick={handleClick}
         onClick={() => alert(123)} 
        >ボタン</a> */}
      <Main page="index" />
      <Footer />
    </div>
  )
}
