//         <div class="services-viewport">
//       <h2 class="services-header">Serviços</h2>
//       <section class="services" id="services">

import Image from "next/image"
import servicos from "@/servicos.json"
import { useState } from "react"

const services = servicos

export default function Servicos(){
    const [isShow, setShow] = useState(false)
    const [currentCard, setCurrentCard] = useState(0)
    const servicesList = services.map((service, index) =>
    <ServiceCard
        label={service.label}
        imgName={service.imgName}
        description={service.description}
        price={service.price}
        key={service.label}
        setShow={setShow}
        setCurrentCard={setCurrentCard}
        id={index}
    />)
    return(
        <div className="services-viewport">
            {isShow&&<ServiceModal
                title={services[currentCard].label}
                setShow={setShow}
            />}
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
        <a href="https://wa.me/message/XUIBSFDFHNMKH1" className="typer-cta">CONTRATAR AGORA</a>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}


function ServiceCard(props) {
    const { label, price, imgName, description, setShow, id, setCurrentCard} = props

    return (
        <a className="service-card hover-zoom" onClick={()=>{setShow(true);setCurrentCard(id)}}>
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

export function ServiceModal({title, setShow}){
    function close(){
        setShow(false)
    }
    return(<>
        <div className="service-modal">
            <div className="modal-body">
                <div className="modal-header">
                    <h1>{title}</h1>
                    <span onClick={close}>x</span>
                </div>
            </div>                
        </div>
        <style jsx>{`                        
            .service-modal{
                display: flex;
                flex-direction: column;
                width: 100vw;
                height: 105vh;
                top: 0;
                left: 0;
                position: fixed;
                background-color: rgba(0, 0, 0, 0.489);
                z-index: 10;
                justify-content: center;
                align-items: center;
            }
            .modal-body{    
                display: flex;
                flex-direction: column;
                background-color: white;
                color: black;
                width: 85%;
                height: 85vh;
                max-width: 900px;
                border-radius: 10px;
                animation: show 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                overflow: hidden;
            }
            .modal-header{
                background-color: rgb(241, 173, 55);
                color: rgb(37, 37, 37);
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .modal-header h1{
                margin: 5px 10px;
                font-family: 'dosis';
                font-size: 6vw;
            }
            .modal-header span {
                display: flex;
                place-content: center center;
                place-items: center center;
                font-size: 25pt;
                margin: 4px 12px;
                padding-bottom: 3px;
                background-color: white;
                border-radius: 50%;
                height: 35px;
                font-weight: 700;
                width: 35px;
                color: rgb(241, 173, 55);
                cursor: pointer;
                box-shadow: 0px 0px 2px rgba(255, 212, 111, 0.795) inset;
                transform: scale(0.85);

            }
            .modal-header span:hover{
                transform:translateY(-2px);
            }
            @keyframes show {
                from {
                    transform: scale(0.01);
                }
                to {
                    transform: scale(1);
                }
            }
            @media only screen and (min-width: 650px ) {
                .modal-header h1 {
                    font-size: 32px;

                }
                .modal-header span {
                    transform: scale(1);
                }
            }
        `}</style>
        </>
    )
}