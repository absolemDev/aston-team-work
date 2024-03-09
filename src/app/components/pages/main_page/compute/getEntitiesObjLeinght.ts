export default function getEntitiesObjLenght(value: Object): any {
  Object.entries(value).map(([key, values], index) => {
    if (Object.entries(values) !== undefined) {
      return getEntitiesObjLenght(values);
    } else {
      return values.length;
    }
  });
}
