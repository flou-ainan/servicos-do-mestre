import Image from "next/image"
import PlanoDiscipulo from "./planos/PlanoDiscipulo"
export default function Planos({setModalElement, setModalShown}){
    return(
        <>
        <div className="planos">
            <PlanoDiscipulo
                setModalElement={setModalElement}
                setModalShown={setModalShown}
            />     
        </div>
        <style jsx>{`
            .planos {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                padding: 30px 15px;
            }
        @media only screen and (min-width: 750px) {
            .planos {
                flex-direction: row;
                padding: 70px 15px;
            }    
        }
        `}</style>
        </>
    )
}