export default function Nav() {
    return(
        <nav >
            <div className="title">
                <img src="favicon.png" className="nav-logo" />
                <span className="title-label">Mestre Flou Soluções Digitais</span>
            </div>
            <details>
                <summary>Mais</summary>
                <ul>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="https://mestreflou.blogspot.com">Blog</a></li>
                    <li><span>Meu app {'  '}<a href='meu-app'>{'➡️'}</a></span></li>
                </ul>
            </details>
        </nav>
    )
}