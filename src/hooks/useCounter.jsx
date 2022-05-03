import { useCallback, useEffect, useState } from 'react'

export const useCounter = () => {
  const [count , setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  
  const handleClick = useCallback((e) => {
      // 前の状態を用いてそれに対して処理を行いたい場合は関数で記載する
      if (count < 10) {
        console.log(count)
        setCount((prevCount) => prevCount + 1);
      }
    }, [count]);
    const handleDisplay = useCallback((isShow) => {
      // 前回の値を使いたいときは関数にする
      setIsShow((prevIsShow) => !prevIsShow);
    }, []);
  
    return {count, isShow, handleClick, handleDisplay};
}