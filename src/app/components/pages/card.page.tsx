import React, {memo} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "#hooks";
import {addFavorite} from "#store";
import {CardDetailedMemo} from "../CardDetailed";

const CardPage = () => {
    let {id} = useParams()
    let dispatch = useAppDispatch()
    let favourites = useAppSelector(state => state.user.favorites)
    let card = useAppSelector(state => state.cards.entities.find((el) => el.cardId === id?.slice(1)))

    const addToFavourites = () => {
        if (id) {
            dispatch(addFavorite(id))
        }
    };
    return (
        <>
            <CardDetailedMemo card={card} addToFavourites={addToFavourites}/>
        </>

    )

};
const CardPageMemo = memo(CardPage)
export {CardPageMemo};