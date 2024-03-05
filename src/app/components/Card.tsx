import {useNavigate} from "react-router-dom";

type cardType = {
    id: string
    name: string
    rarity: string
    img: string
}
export default function Card(props: cardType) {
    const navigate = useNavigate()
    return (
        <div style={{
            width: "14rem",
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            maxHeight: '500px',
            padding: '10px'
        }}>
            <img src={props.img} className="card-img-top" alt="Card image" style={{height: '300px'}}/>
            <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}} className="card-body">
                <p style={{fontSize: "18px"}}>Rarity:{props.rarity}</p>
                <button onClick={() => navigate(`/card/:${props.id}`)} style={{width: "8rem"}} type="button"
                        className="btn btn-primary">Подробнее
                </button>
            </div>
        </div>
    )
}