export default function getArrayFromCard(obj: Object, arrOfCards: any[]) {
  Object.entries(obj).forEach(([key, value], index) => {
    value.forEach((el: any) => {
      el.img !== undefined &&
        el.health !== undefined &&
        el.attack !== undefined &&
        el.cardSet !== undefined &&
        el.collectible === true &&
        el.cost !== undefined &&
        el.cardId !== undefined &&
        el.type !== undefined &&
        arrOfCards.push({ img: el.img, name: el.name, id: el.cardId });
    });
  });
  return arrOfCards;
}
