import { Inter } from 'next/font/google'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import BotaoFlutuante from './components/BotaoFlutuante'
import { Helmet } from 'react-helmet';
import WelcomeVideo from './components/WelcomeVideo'
import Planos from './components/Planos'
import ModalLoader from './components/ModalLoader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/flou-ainan/flou-open-studies/main/Docs/test/servicos.md')
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        //
      });
  }, [])

  const [isModalShown, setModalShown] = useState(false)
  const [modalElement, setModalElement] = useState(<div> <h1>Sou um Componentye Carregado no Modal</h1> </div>)
9
  return (
    <>
      <Head>
        <meta property="twitter:title" content="Mestre Flou ✊ | Soluções Digitais 🌐" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="@FlouAinan" />
        <meta name="twitter:description" content="Logos🔸Websites🔸Catálogos 🔸Artes digitais
        Aplicativos Web 🔸QR Codes 🔸Assistência" />
        <meta name="twitter:image" content="https://i.ibb.co/kGQPGp3/link-preview-compact-02.jpg"></meta>

        <meta name="description" content="Logos🔸Websites🔸Catálogos 🔸Artes digitais
        Aplicativos Web 🔸QR Codes 🔸Assistência" />

        <meta name="og:title" property="og:title" content="Mestre Flou ✊ | Soluções Digitais 🌐" />
        <meta property="og:site_name" content="" />
        <meta property="og:url" content="mestreflou.com.br" />
        <meta name="og:description" property="og:description" content="Logos🔸Websites🔸Catálogos 🔸Artes digitais
        Aplicativos Web 🔸QR Codes 🔸Assistência"/>
        <meta property="og:type" content="product.group" />
        <meta property="og:image" content="https://i.ibb.co/kGQPGp3/link-preview-compact-02.jpg"></meta>
      </Head>
      <main className='body'>
        {
        isModalShown &&
        <ModalLoader
          component={modalElement}
          setModalShown={setModalShown}
        />}

        <Header />
        <WelcomeVideo/>
        <Planos 
          setModalElement={setModalElement}
          setModalShown={setModalShown}
        />
        <Servicos />
        <Sobre />
        <BotaoFlutuante />
      </main>
    </>
  )
}
