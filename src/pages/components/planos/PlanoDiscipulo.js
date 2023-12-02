import Image from "next/image"
export default function PlanoDiscipulo({setModalShown, setModalElement}){
    const ModalContent = <>
        <div>
            Plano Discípulo
        </div>
    </>

    return(
        <div className="plano">
            <Image
                src={"/images/plano-discipulo02.svg"}
                width={300}
                height={500}
            />
            <span
                className="cta-plano"
                onClick={() => {
                    setModalElement(ModalContent)
                    setModalShown(prev => !prev)
                }}
            >
                Quero saber mais
                </span>
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

