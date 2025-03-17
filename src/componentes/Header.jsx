import globo from '../assets/images/globe.png'
import reactLogo from '../assets/images/react.svg'

export default function Header(){
    return (
        <header>
            <img src={globo}/>
            <h1>Meu diário de viagem</h1>
            <img src={reactLogo}/>
        </header>
    )
}