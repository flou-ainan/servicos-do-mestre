
export default function BotaoFlutuante(props){
    return(
        <>
        <div className="float-container">
            <a href="https://wa.me/5535998138369?text=Ol%C3%A1%20Flou%2C%20tudo%20bem%3F%0AQuero%20uma%20consultoria%20gratuita%0A">
            <img src="/images/botao-consultoria.webp"/>
            </a>
        </div>
        <style jsx>{`
            .float-container{
                position: fixed;
                bottom: 0px;
                right: 0px;
                z-index: 20;
                width: 60vw;
                max-width: 230px;
            }
            .float-container  img {
                width: 100%;
            }
            .float-container:hover{
                filter: brightness(1.1);
                transform: translateY(-1px);
            }
        `}</style>
        </>
    )
}