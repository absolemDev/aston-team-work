export default function getArrayFromInfo (obj:Object, arrOfInfo:any[]){
    Object.entries(obj).forEach(([key, value], index) => {
        key !== "entities" &&
          key !== "isLoading" &&
          key !== "error" &&
          key !== "currentCard" &&
          arrOfInfo.push({ key, value });
      });
      return arrOfInfo
}