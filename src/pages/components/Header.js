import Nav from "./Nav";

export default function Header() {
    return (
        <header className="hero">
            <Nav />
            <div className="hero-content">
                <Herofirst />
                <Herosecond />
            </div >
        </header>
    )
}


const Herofirst = () =>
    <div className="hero-first shadow-text">
        <h1>
            <span id="header-text" className="shadow-text">O Melhor do Digital</span><span id="header-text-bar" className="blinker bar">|</span>
        </h1>
        <p id="header-subtitle">
            <span id="subtitle-text-01">Feito sob medida para você</span><span id="subtitle-text-01-bar" className="blinker bar">|</span>
            <br /><br /><b><span id="subtitle-text-02" className="bold">do seu jeito</span></b><span id="subtitle-text-02-bar" className="blinker bar">|</span>
        </p>
    </div>

const Herosecond = () =>
    <div className="hero-second">
        <img src="/images/banner-test.png" className="banner" />
        <br />
        <a href="#servicos" className="typer-cta">CONTRATAR AGORA</a>
    </div>
