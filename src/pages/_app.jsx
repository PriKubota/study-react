import 'src/styles/globals.css'
import Head from 'next/dist/shared/lib/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
