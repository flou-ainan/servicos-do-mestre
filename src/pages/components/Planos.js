import Image from "next/image"
import PlanoDiscipulo from "./planos/PlanoDiscipulo"
import PlanoMestre from "./planos/PlanoMestre"
import PlanoPersonalizado from "./planos/PlanoPersonalizado"
export default function Planos({setModalElement, setModalShown}){
    return(
        <>
        <div className="planos">
            <PlanoDiscipulo
                setModalElement={setModalElement}
                setModalShown={setModalShown}
            /><PlanoMestre
            setModalElement={setModalElement}
            setModalShown={setModalShown}
            />
            <PlanoPersonalizado
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
                transform: scale(0.8);
            }    
        }
        @media only screen and (min-width: 950px) {
            .planos {
                transform: scale(1);
            }
        }
        `}</style>
        </>
    )
}