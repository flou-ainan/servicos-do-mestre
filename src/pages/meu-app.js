import Link from "next/link"
export default function meuApp(){
    return(
        <div className="meu-app">
            <h1>Bem Vindo(a) ao meu App</h1><br/>
            <Link href="./">{'⬅️ Voltar'}</Link>
        </div>
    )
}