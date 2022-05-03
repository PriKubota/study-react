import { useCallback, useEffect, useState } from 'react'

export const useBgLightBlue = () => {
    useEffect(() => {
      // マウント時の処理
      // このようにDOM要素に直接アクセスするのはNGだったりする
      document.body.style.backgroundColor = 'lightblue';
      // アンマウント時の処理
      // クリーンアップファンクションとも呼ばれる
      return () => {
        document.body.style.backgroundColor = '';
      }
      // 第2引数を設定すると変数が変更されたタイミングで改めてuseEffectの処理が実行される
    }, []);
  }
  