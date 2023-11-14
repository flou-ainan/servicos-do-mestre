import Link from "next/link"
import Image from "next/image"
export default function Nav(props) {
    return (
        <nav >
            <div className="title">
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
            </div>
            <details>
                <summary>ACESSAR</summary>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/consultoria">Consultoria</Link>
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
                        <Link href='/linkpersonalizado'>
                            Mini Site {'➡️'}
                        </Link>
                    </li>
                </ul>
            </details>
        </nav>
    )
}