import Header from './Header.jsx'
import Article from './Article.jsx'
import database from '../database.js'
import '../assets/styles.css'
export default function Viagem(){
    //Criando uma lista de componentes Article para cada dado em database
    const artigos = database.map(dado => <Article key={dado.id} {...dado}/>)
    return(
        <>
            <Header />
            <main>
                {artigos}
            </main>
        </>
    )
}