import Image from "next/image"
export default function PlanoPersonalizado({setModalShown, setModalElement}){
    const ModalContent = <>
        <div>
        Plano Mestre
        </div>
    </>

    return(
        <div className="plano">
            <Image
                src={"/images/planopersonalizado.svg"}
                width={300}
                height={500}
            />
            <a href="https://wa.me/5535998138369?text=Ol%C3%A1%20Flou%2C%20estou%20interessado%20no%20plano%20mensal%20personalizado.%0A">
                <span
                    className="cta-plano"
                    onClick={
                        () => console.log("clicou")
                        /*() => {
                        setModalElement(ModalContent)
                        setModalShown(prev => !prev)
                    }*/}
                >
                    Quero saber mais
                </span>
            </a>
        <style jsx>
            {`
        .plano{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .cta-plano{
            padding: 10px;
            font-size: 18pt;
            font-weight: 500;
            color: white;
            border-radius: 10px;
            background-color: darkorange;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            font-family: "Bebas neue";

        }
            `}
        </style>
        </div>
    )
}

