//         <div class="services-viewport">
//       <h2 class="services-header">Serviços</h2>
//       <section class="services" id="services">

import Image from "next/image"
import servicos from "@/servicos.json"
import WAIcon from "./WAIcon"

const services = servicos

export default function Servicos(){
    const servicesList = services.map(service =>
    <ServiceCard
        label={service.label}
        imgName={service.imgName}
        description={service.description}
        price={service.price}
        key={service.label}
    />)
    return(
        <div className="services-viewport">
        <h2 className="services-header center-title">Serviços</h2>
        <section className="services" id="servicos">
                {servicesList}
        </section>
        <br/>
        <Image
        id="whats"
        className="banner-cta"
        src="/images/cta-before.jpg"
        width={1600}
        height={446}
        alt="banner"        
        />
        <Image
            src={"/images/avatar.webp"}
            width={500}
            height={500}
            alt={"Flou te oferece os melhores serviços"}
            style={{
                borderRadius: "40px",
                maxWidth: "500px",
                width:"90vw"
            }}
        />
        <a href="https://wa.me/message/XUIBSFDFHNMKH1" className="typer-cta" style={{marginTop:"-80px"}}>FALE COMIGO <WAIcon/></a><br/><br/><br/>
        
        </div>
    )
}


function ServiceCard(props) {
    const { label, price, imgName, description } = props

    return (
        <a className="service-card hover-zoom" href="#whats">
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