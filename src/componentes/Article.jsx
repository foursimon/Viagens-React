//Componente responsável por criar artigos para cada recordação de uma viagem
export default function Article(props){
    return (
        <article>
            <div className="image-container">
                <img src={props.image.src} alt={props.image.src} className="location-image"/>
            </div>
            <div className="article-container">
                <div className="location-container">
                    <span className="location">{props.location}</span>
                    <a className="link" href={props.link}>Veja no Google Maps</a>
                </div>
                <div className="description-container">
                    <h1 className="location-name">{props.name}</h1>
                    <p className="entry-date">{props.date}</p>
                    <p className="location-description">{props.text}</p>
                </div>
            </div>
        </article>
    )
}