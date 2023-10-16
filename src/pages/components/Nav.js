export default function Nav() {
    return(
        <nav >
            <div class="title">
                <img src="favicon.png" className="nav-logo" />
                <span className="title-label">Mestre Flou Soluções Digitais</span>
            </div>
            <details>
                <summary>Mais</summary>
                <ul>
                    <li>Serviços</li>
                    <li>Sobre</li>
                    <li>Blog</li>
                    <li><span>Meu app {'  '}<a href='meu-app'>{'➡️'}</a></span></li>
                </ul>
            </details>
        </nav>
    )
}