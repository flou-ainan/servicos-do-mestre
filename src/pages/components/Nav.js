export default function Nav() {
    return(
        <nav >
            <div class="title">
                <img src="favicon.png" className="nav-logo" />
                <span className="title-label">Mestre Flou Soluções Digitais</span>
            </div>
            <h1>Meu app {'  '}<a href='meu-app'>{'➡️'}</a></h1>
            {/* <details>
                <summary>Mais</summary>
                <ul>
                    <li>Serviços</li>
                    <li>Sobre</li>
                    <li>Blog</li>
                </ul>
            </details> */}
        </nav>
    )
}