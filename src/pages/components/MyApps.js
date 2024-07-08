export default function MyApps(props) {
  let link = {
    whats: "https://flou-ainan.github.io/flow-office-apps-wpp-custom-link/",
    ml: "https://flou-ainan.github.io/mercado-livre-link-helper/",
    escadas: "https://app-escadas-codeart.netlify.app/",
    twitter: "https://flou-ainan.github.io/twitter-post-maker/"
  }


  return (
    <div className="text-3xl text-center self-center" id="portfolio">
      <br />
      <ul className="flex flex-col justify-center">
        <li>
          <a href={link.whats}>
            Crie Links Especiais para seu Whatsapp
          </a>
        </li>
        <li>
          <a href={link.ml}>
            Limpador de Links de Ecommerces
          </a>
        </li>
        <li>
          <a href={link.escadas}>
            Projetador de Escadas
          </a>
        </li>
        <li>
        <a href={link.twitter}>
        Criador de Posts Estilo Twitter
        </a>
        </li>
      </ul>
      <br />
    </div>
  )
}