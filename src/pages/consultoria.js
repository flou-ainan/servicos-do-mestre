import Image from "next/image"
import Nav from "./components/Nav"
import Link from "next/link"
import YoutubePlayer from "./components/YouTubePlayer"

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
                style={{
                  width: "80vw",
                  maxWidth: '800px'
                }}
            />
            <div className="video-container">
              <YoutubePlayer
              embedId="GELIiEfxImY"
              />
            </div>
            <Link href="#hero">
            <span className="to-top-btn">⬆️ voltar ao topo ⬆️</span>
            </Link>
            <br/><br/>
        </div>
        <style jsx>{`
          .video-container{
            max-width: 800px;
          }
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