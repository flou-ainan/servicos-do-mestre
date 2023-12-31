import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
export default function LinkPersonalizado() {
    const og = {
        title: "⚠️Anuncie⚠️ Link Profissional 🚀️",
        description: "Personalize seus Links🔗️ e Venda MUITO MAIS!💰️",
        siteName: "Mestre Flou ✊️| Soluções Digitais 🌐️",
        type: "product",
        image: "https://i.ibb.co/ncg9nnG/link-outdoor.jpg"

    }
    useEffect(()=>{
        setTimeout(() => {window.location.replace("/")},7000)
    })
    return (
        <>
            <Head>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={og.title} />
                <meta name="twitter:site" content={og.siteName} />
                <meta name="twitter:description" content={og.description} />

                <meta name="twitter:creator" content="@FlouAinan" />
                <meta name="twitter:image" content={og.image}></meta>

                <meta name="description" content={og.description} />

                <meta property="og:title" content={og.title} />
                <meta property="og:site_name" content={og.siteName} />
                <meta property="og:url" content="mestreflou.com.br/linkpersonalizado" />
                <meta property="og:description" content={og.description} />
                <meta property="og:type" content={og.type} />
                <meta property="og:image" content={og.image}></meta>
            </Head>
            <div className="meu-app">
                <Image src="/images/flyer-quadrado.webp"
                    width={800}
                    height={800}
                    style={{
                        objectFit: "contain",
                        maxWidth: '470px',
                        width: "75%"
                    }}
                />
                <h3>Aguarde para ser redirecionado(a)</h3>                
                    <span className="loader"></span>
                    <br/><br/><br/><br/><br/>
            </div>
            <style jsx>{`
        h3 {
            text-align: center;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .meu-app{
            padding-top: 70px;
            background-image: linear-gradient( rgb(10, 9, 11), rgb(45, 43, 47));
        }
        .loader {
        max-width: 100px;
        width: 30vw;
        height: 30vw;
        max-height: 100px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 4s linear infinite ;
      }
      .loader::after{
        inset: 18px;
        transform: rotate3d(90, 90, 0, 180deg );
        border-color: #ee7c1e;
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      }
        `}</style>
        </>
    )
}