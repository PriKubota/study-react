import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue'

export default function Home() {
  // フックはreturnの前で呼び出す
  const {count, isShow, handleClick, handleDisplay} = useCounter();
  const {text, array, handleChange, handleAdd} = useInputArray();
  useBgLightBlue();
  // コンポネント内に書くパターンは再レンダリング時に再生成されるデメリットがある
  // コンポネントの外に書くと引数を渡すことが必要になったりして煩雑になる可能性もある
  // useCallbackで再レンダリング時に生成されないのでパフォーマンスが向上する
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

      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd}>リスト追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  )
}
