import { Inter } from 'next/font/google'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='body'>
      <Header />
      <Servicos />
      <Sobre />
      <iframe src="https://app.simplenote.com/p/4t4z9J" className='iframe'/>
    </main>
  )
}
