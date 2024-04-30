import Link from "next/link"
import Image from "next/image"
import WAIcon from "./WAIcon"
export default function Nav(props) {
    return (
        <nav >
            <div className="nav-title">
                <Link href="/">
                <Image 
                    src="/favicon.png" 
                    className="nav-logo" 
                    width={50}
                    height={50}
                    alt="icone mestre flou"
                />
                </Link>
                <span className="title-label">Mestre Flou Soluções Digitais</span>
                <span>{}</span>
                <span className="local">📌️ Guapimirim - RJ</span>
            </div>
            <details>
                <summary>ACESSAR</summary>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/#servicos">Serviços</Link>
                    </li>
                    <li>
                        <Link href="/#sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link href={'/blog'}>Blog</Link>
                    </li>
                     <li>
                        <Link href={'https://flou-ainan.github.io/flow-office-apps-wpp-custom-link/'}>Link Personalizado <WAIcon/></Link>
                    </li>
                    <li>
                        <Link href='/linkpersonalizado'>
                            Mini Site {'➡️'}
                        </Link>
                    </li>
                </ul>
            </details>
        </nav>
    )
}