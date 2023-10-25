import { Inter } from 'next/font/google'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import { useEffect } from 'react'

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
    <main className='body'>
      <Header />
      <Servicos />
      <Sobre />
      {"<iframe src='https://app.simplenote.com/p/4t4z9J' className='iframe' />"}
    </main>
  )
}
