import { Inter } from 'next/font/google'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Portfolio from './components/Portfolio'
import TabsHandler from './components/TabsHandler'
import MyApps from './components/MyApps'
import { Children, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import BotaoFlutuante from './components/BotaoFlutuante'
import WelcomeVideo from './components/WelcomeVideo'
import easyURL from '@/libs/easyURL'


const inter = Inter({ subsets: ['latin'] })
export default function Home(children) {
  const [urlChangeCount, setUrlChangeCount] = useState(0)
  useEffect(()=>{
    const onHashChange = () =>{
      // window.location.href = window.location.href
      setUrlChangeCount(prev=>prev+=1)
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  },[])
  useEffect(()=>console.log(urlChangeCount),[urlChangeCount])

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
        Aplicativos Web 🔸QR Codes 🔸 Assistência"/>
        <meta property="og:type" content="product.group" />
        <meta property="og:image" content="https://i.ibb.co/kGQPGp3/link-preview-compact-02.jpg"></meta>
      </Head>
      <main className='body' onHashChange={()=>console.log("ddd")}>
        <Header />
        <WelcomeVideo />
        <TabsHandler urlChangeCount = {urlChangeCount}>
          <Servicos title="Serviços" id="servicos"/>
          <Portfolio title="Portfólio" id="portfolio"/>
          <MyApps title="Apps Gratuitos" id="freeapps"/>
        </TabsHandler >
        <Sobre/>
        <BotaoFlutuante />
      </main>
    </>
  )
}
