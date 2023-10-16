import Nav from "./Nav";

export default function Header() {
    return (
        <header class="hero">
            <Nav />
            <div class="hero-content">
                <Herofirst />
                <Herofsecond />
            </div >
        </header>
    )
}


const Herofirst = () =>
    <div class="hero-first shadow-text">
        <h1>
            <span id="header-text" class="shadow-text">O Melhor do Digital</span><span id="header-text-bar" class="blinker bar">|</span>
        </h1>
        <p id="header-subtitle">
            <span id="subtitle-text-01">Feito sob medida para você</span><span id="subtitle-text-01-bar" class="blinker bar">|</span>
            <br /><br /><b><span id="subtitle-text-02" class="bold">do seu jeito</span></b><span id="subtitle-text-02-bar" class="blinker bar">|</span>
        </p>
    </div>

const Herofsecond = () =>
    <div class="hero-second">
        <img src="/images/banner-test.png" class="banner" />
        <br />
        <a href="#services" class="typer-cta">CONTRATAR AGORA</a>
    </div>
