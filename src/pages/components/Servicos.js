//         <div class="services-viewport">
//       <h2 class="services-header">Serviços</h2>
//       <section class="services" id="services">

import Image from "next/image"

const services = [
    {
        label: "Arte Para Redes",
        imgName: "artes-para-redes.png",
        price: "19,00",
        
    },
    {
        label: "Seu Comércio no Digital",
        imgName: "online-shop.png",
        price: "799,00",
        
    },
    {
        label: "Website",
        imgName: "website.png",
        price: "399,00",
        
    },
    {
        label: "Landing Page",
        imgName: "website-estatico.png",
        price: "299,00",
        
    },
    {
        label: "Design de Logomarca",
        imgName: "logos-04-wshadow.jpg",
        price: "129,00",
        
    },
    {
        label: "Edição de Vídeo",
        imgName: "edicao-de-video3.jpg",
        price: "59,00",
        
    },
    {
        label: "Design Cartão de Visita",
        imgName: "cartao-de-visita.png",
        price: "139,00",
    },
    {
        label: "Convite Animado Digital",
        imgName: "convite-animado.jpg",
        price: "29,00",
    }
]

export default function Servicos(){
    const servicesList = services.map(service =>
    <ServiceCard
        label={service.label}
        imgName={service.imgName}
        price={service.price}
        key={service.label}
    />)
    return(
        <div className="services-viewport">
        <h2 className="services-header center-title">Serviços</h2>
        <section className="services" id="servicos">
                {servicesList}
        </section>
        </div>
    )
}


function ServiceCard(props) {
    const { label, price, imgName } = props

    return (
        <a className="service-card" href="#sobre">
            <div className="service-card-section card-label">
                <span className="label-text">{label}</span>
            </div>
            <div className="service-card-section card-img-holder">
                <Image
                    src={`/images/${imgName}`}
                    width={250}
                    height={250}
                    alt={label}
                />
            </div>
            <div className="card-footer">
                <span className="left">A partir de R${price}</span>
                <span className="right">saiba mais...</span>
            </div>
        </a>
    )
}