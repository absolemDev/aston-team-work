import {addFavorite, removeFavorite} from "#store";
import {useAppDispatch, useAppSelector} from "./store.hooks";

const useFavourite = (id: string): [boolean, Function] => {
    let dispatch = useAppDispatch()
    let favourites = useAppSelector(state => state.user.favorites)
    let isFavourite = id ? favourites.includes(id) : false
    const changeFavouriteStatus = () => {
        if (favourites.includes(id)) {
            dispatch(removeFavorite(id))
        } else {
            dispatch(addFavorite(id))
        }
    };
    return [isFavourite, changeFavouriteStatus]

}

export {useFavourite}