import React, {memo} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "#hooks";
import {CardDetailedMemo} from "../CardDetailed";
import {useFavourite} from "../../hooks/useFavourite.hook";


const CardPage = () => {
    let {id} = useParams()
    let card = useAppSelector(state => state.cards.entities.find((el) => el.cardId === id?.slice(1)))
    let [isFavourite, ChangeFavouriteStatus] = useFavourite(id || '')
    return (
        <>
            <CardDetailedMemo card={card}
                              ChangeFavouriteStatus={ChangeFavouriteStatus} isFavourite={isFavourite}/>
        </>

    )

};
const CardPageMemo = memo(CardPage)
export {CardPageMemo};