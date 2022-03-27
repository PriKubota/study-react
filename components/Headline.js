import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.css'

export function Headline(props) {
    return (
    <div>
        <h1 className={styles.title}>
        {props.page}Page!!kubota
        </h1>
        <p className={styles.description}>
        Get started by editing {props.children}
        </p>
    </div>
  )
}
