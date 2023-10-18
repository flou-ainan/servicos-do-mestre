import Link from "next/link"
export default function Nav() {
    return (
        <nav >
            <div className="title">
                <img src="favicon.png" className="nav-logo" />
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
                        <a href="https://mestreflou.blogspot.com">Blog</a>
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