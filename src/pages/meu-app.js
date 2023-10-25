import Head from "next/head"
import Link from "next/link"
export default function meuApp(){
    const og = {
        title:"Anuncie ⚠️ Link Proffissional 🌐️",
        description:"Personalize seus Links e Venda MUITO MAIS!",
        siteName:"Mestre Flou Soluções Digitais",
        type: "product"

    }
    return(
        <>
        <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={og.title} />
        <meta name="twitter:site" content={og.siteName} />
        <meta name="twitter:creator" content="@FlouAinan" />
        
        <meta name="description" content={og.description} />
  
        <meta property="og:title" content={og.title}/>
        <meta property="og:site_name" content={og.siteName}/>
        <meta property="og:url" content="mestreflou.com.br/meu-app"/>
        <meta property="og:description" content={og.description}/>
        <meta property="og:type" content={og.type}/>
        <meta property="og:image" content="/images/link-outdoor.jpg"/>
        </Head>
        <div className="meu-app">
            <h1>Bem Vindo(a) ao meu App</h1><br/>
            <Link href="./">{'⬅️ Voltar'}</Link>
        </div>
        </>
    )
}