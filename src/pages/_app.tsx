import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/styles.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Genesis Assessoria</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Genesis Assessoria - Ajudamos voce a tirar seu certificado"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
