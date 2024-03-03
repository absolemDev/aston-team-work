type cardType = {
    title: string
    text: string
    img: string
}
export default function Card(props: cardType) {
    return (
        <div className="card" style={{width: "14rem", display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}} className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button style={{width: "8rem"}} type="button" className="btn btn-primary">Подробнее</button>
                <button style={{width: "8rem", marginTop: "1rem"}} type="button" className="btn btn-success">Добавить
                    в
                    избранное
                </button>
            </div>
        </div>
    )
}