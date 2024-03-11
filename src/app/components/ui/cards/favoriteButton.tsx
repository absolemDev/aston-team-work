import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  addFavorite,
  getCardFavoriteStatus,
  removeFavorite,
} from "../../../store";
import { MouseEventHandler } from "react";

interface FavoriteButtonProps {
  id: string;
  className?: string;
}

const FavoriteButton = ({ id, className }: FavoriteButtonProps) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(getCardFavoriteStatus(id));

  const toggelFavorite: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    isFavorite ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id));
  };

  return (
    <Button
      variant="outline-danger"
      className={className}
      size="lg"
      onClick={toggelFavorite}
    >
      <i className={`bi bi-heart${isFavorite ? "-fill" : ""}`}></i>
    </Button>
  );
};

export { FavoriteButton };
