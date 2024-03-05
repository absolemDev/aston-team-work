import React from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "#hooks";
import {addFavorite} from "#store";

const CardPage = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const cards = useAppSelector(state => state.cards.entities)
    console.log(cards)
    const card = cards.filter(el => el.cardId === id)

    // let id = "EX1_572"
    // let card = {
    //
    //     cardId: 'myid',
    //     name: "Yserta",
    //     cardSet: "string",
    //     type: "string",
    //     faction: "string",
    //     rarity: "string",
    //     cost: 123,
    //     attack: 123,
    //     health: 123,
    //     race: "string",
    //     playerClass: "string",
    //     img: "string",
    //     text: "At the end of your turn, add a Dream Card to your hand.",
    //     flavor: "Ysera rules the Emerald Dream. Which is some kind of green-mirror-version of the real world, or something?",
    //     artist: "Gabor Szikszai",
    //     elite: true
    //
    // }

    const addToFavourites = () => {
        if (id) {
            dispatch(addFavorite(id))
        }
    };
    return (
        <>
            <div className="card mb-3" style={{maxWidth: "1840px", padding: '20px'}}>
                <div className="row g-0">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }} className="col-md-4">
                        <img style={{maxWidth: '300px'}}
                             src="http://wow.zamimg.com/images/hearthstone/cards/enus/original/EX1_572.png"
                             alt="Card Image"/>
                        <button onClick={addToFavourites} className="btn btn-primary">Add to favourites</button>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{card.name}</h1>
                            <hr/>
                            {/*<br/>*/}

                            <h2>Card text</h2>
                            <p style={{fontSize: '20px'}}>{card.text}</p>
                            <h2>Flavor</h2>
                            <p className="card-text" style={{fontStyle: 'oblique'}}>{card.flavor}</p>
                            <h5>Key parameters: </h5>
                            <ul>
                                <li>Card set: {card.cardSet}</li>
                                <li>Race: {card.race}</li>
                                <li>Type: {card.type}</li>
                                <li>Cost: {card.cost}</li>
                                <li>Attack:{card.attack}</li>
                                <li>Health: {card.health}</li>
                                <li>Faction: {card.faction}</li>
                                <li>PlayerClass: {card.playerClass}</li>
                                <li>Rarity: {card.rarity}</li>
                                <li>Artist: {card.artist}</li>

                            </ul>
                            <hr/>
                            <p style={{textAlign: "end"}} className="card-text"><small
                                className="text-body-secondary">Elitism: {card.elite ? "Elite" : "Non elite card"}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
        ;
};

export {CardPage};