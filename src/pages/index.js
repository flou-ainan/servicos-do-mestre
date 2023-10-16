import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='body'>
      <h1>Meu app {'  '}<a href='meu-app'>{'➡️'}</a></h1>
    </main>
  )
}
