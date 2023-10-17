// import '@/styles/style.css'
import '@/styles/globals.css'
import '@/styles/nav.css'
import '@/styles/hero.css'
import '@/styles/meu-app.css'
import '@/styles/servicos.css'
import '@/styles/sobre.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return <>
    <Head>
    <title>Mestre Flou Soluções Digitais</title>
    </Head>
    <Component {...pageProps} />
  </>
}
