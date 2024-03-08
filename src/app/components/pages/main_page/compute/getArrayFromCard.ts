export default function getArrayFromCard (obj:Object, arrOfCards:any[]){
    Object.entries(obj).forEach(([key, value], index) => {
        value.img !== undefined &&
          value.health !== undefined &&
          value.attack !== undefined &&
          value.cardSet !== undefined &&
          value.collectible === true &&
          value.cost !== undefined &&
          value.cardId !== undefined &&
          value.type !== undefined &&
          arrOfCards.push({
            img: value.img,
            name: value.name,
            id: value.cardId,
            cardSet: value.cardSet,
          });
      });
      return arrOfCards
}