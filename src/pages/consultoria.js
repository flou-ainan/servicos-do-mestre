import Image from "next/image"
import Nav from "./components/Nav"
import Link from "next/link"

export default function Consultoria(){
    return(
    <>
        <div className="form-body">
          <Nav/>
            <Image
                id="hero"
                className="head-banner"
                src="/images/avatar-redondo-forms.png"
                width={800}
                height={350}
                alt="Consultoria Gratis do Mestre Flou"
            />
            <iframe
              id="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSec418eoW0mfVTYRHIbnBdtclqzvlQ9V8zwHpC4Df_bi0pKlA/viewform?embedded=true"
              width="100%" 
              height="1000px">
              Carregando…
            </iframe>
            <Link href="#hero">
            <span className="to-top-btn">⬆️ voltar ao topo ⬆️</span>
            </Link>
            <br/><br/>
        </div>
        <style jsx>{`
          img{
            width: 90%;
            max-width: 800px;
          }
          .form-body{
            background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 100%), url("/images/form-background.webp");
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            color: white;
          }
          .to-top-btn{
            max-width: 300px;
            width: 50vw;
            background-color: #f4b221;
            color: black;
            font-family: 'bebas neue';
            padding: 5px;
            font-size: 18pt;
            text-align: center;
            border-radius: 10px;
            margin: 20px;
          }
        `}</style>
    </>
    )
}