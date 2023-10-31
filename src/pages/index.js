import { Inter } from 'next/font/google'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import { useEffect } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/flou-ainan/flou-open-studies/main/Docs/test/servicos.md')
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        console.log(text);
      });
  }, [])

  return (
    <>
    <Head>
    <meta property="twitter:title" content="Mestre Flou ✊ | Soluções Digitais 🌐"/>
    <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="metreflou.com.br" />
      <meta name="twitter:creator" content="@FlouAinan" />
      <meta name="twitter:description" content="Logos🔸Websites🔸Catálogos 🔸Artes digitais
        Aplicativos Web 🔸QR Codes 🔸Assistência" />
      <meta name="twitter:image" content="https://i.ibb.co/kGQPGp3/link-preview-compact-02.jpg"></meta>
      
      <meta name="description" content="Logos🔸Websites🔸Catálogos 🔸Artes digitais
        Aplicativos Web 🔸QR Codes 🔸Assistência" />

      <meta property="og:title" content="Mestre Flou ✊ | Soluções Digitais 🌐"/>
      <meta property="og:site_name" content="Mestre Flou "/>
      <meta property="og:url" content="mestreflou.com.br"/>
      <meta property="og:description" content="Logos🔸Websites🔸Catálogos 🔸Artes digitais
        Aplicativos Web 🔸QR Codes 🔸Assistência"/>
      <meta property="og:type" content="product.group"/>
      <meta property="og:image" content="https://i.ibb.co/kGQPGp3/link-preview-compact-02.jpg"></meta>
    </Head>
    <main className='body'>
      <Header />
      <Servicos />
      <Sobre />
    </main>
    </>
  )
}
