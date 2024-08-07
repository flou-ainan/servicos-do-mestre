import WAIcon from "./WAIcon";

export default function Sobre(props){
    return(
        <section className="sobre" id="sobre">
            <div className="responsive-container">
        <h2 className="title">Sobre</h2>
          <div>
            <p>
              Olá, eu sou o <b>Flou Ainan!</b><br/>
              <span className="d">Designer</span> e <span className="d">programador</span> apaixonado pelo que eu faço.<br/>
            </p>
            <p>
              Aqui no meu playground virtual eu sou <span className="d">mestre</span> das <span className="d">soluções digitais</span>.
              Crio elementos do <span className="d">mundo digital</span> desde criança e desfrutei do alvorescer
              da internet aprendendo cada <span className="d">tecnologia</span> de cada fase.
            </p>
            <p>
              Hoje trago para você o melhor <span className="d">atendimento humanizado</span>, de um profissinal
              com o objetivo de resolver o <b className="d">seu problema</b> da <b className="d">melhor forma </b> 
              com a <b className="d">melhor tecnologia</b> 
            </p>
          </div>
          <br/><br/>
         </div>
 
         <a href="https://wa.me/message/XUIBSFDFHNMKH1" className="typer-cta">FALE COMIGO <WAIcon/></a>
         <br/>   <br/>
        </section>
    )
}