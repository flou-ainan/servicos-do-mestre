import Link from "next/link"
import Image from "next/image"
export default function Nav() {
    return (
        <nav >
            <div className="title">
                <Image 
                    src="/favicon.png" 
                    className="nav-logo" 
                    width={50}
                    height={50}
                    alt="icone mestre flou"
                />
                <span className="title-label">Mestre Flou Soluções Digitais</span>
            </div>
            <details>
                <summary>Mais</summary>
                <ul>
                    <li>
                        <a href="#servicos">Serviços</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <Link href={'/blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link href='/meu-app'>
                            Meu app {'  '}{'➡️'}
                        </Link>
                    </li>
                </ul>
            </details>
        </nav>
    )
}