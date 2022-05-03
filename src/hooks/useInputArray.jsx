import { useCallback, useEffect, useState } from 'react'

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
    const handleChange = useCallback((e) => {
      if (e.target.value.length > 5) {
        alert("5文字まで！");
        return;
      }
      setText(e.target.value.trim());
    }, []);
    const handleAdd = useCallback(() => {
      setArray((prevArray) => {
        // スプレッド構文
        // 最近のJSでは破壊的メソッドを使うのはNGとなっている！
        // それを避けるためにスプレッド構文を使っていく
        // オブジェクトでも基本的にスプレッド構文を使う
        // ミュータブルは一度値を決めたものを変更できる、反対がイミュータブル
        // 最近のJSではミュータブルは悪とされている
        // Reactでもイミュータブルでないと再レンダリングされない
        if (prevArray.some((item) => item === text)) {
          alert('同じ要素がすでにあるよ！')
          return prevArray;
        }
        return [...prevArray, text];
      });
    }, [text]);
    
    return {text, array, handleChange, handleAdd};
  }