type GetDeltaResult = 7 | 4 | 2;

export const getDelta = (totalPages: number, currentPage: number): GetDeltaResult => {
  if (totalPages <= 7) {
    // delta === 7: [1 2 3 4 5 6 7]
    return 7;
  } else {
    // delta === 2: [1 ... 4 5 6 ... 10]
    // delta === 4: [1 2 3 4 5 ... 10]
   return currentPage > 4 && currentPage < totalPages - 3 ? 2 : 4;
  }
}
