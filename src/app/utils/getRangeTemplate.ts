export const SEPARATOR = "..."
export type GetRangeTemplateType = number | typeof SEPARATOR

export const getRangeTemplate = (currentPage: number, delta: number, totalPages: number): Array<GetRangeTemplateType> => {

  const getRange = (start: number, end: number): Array<number> => {
    return Array(end - start + 1)
      .fill(end - start + 1)
      .map((el, indexCurrentElement) => indexCurrentElement + start);
  };
  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  };

  if (range.start - 1 === 1 || range.end + 1 === totalPages) {
    range.start += 1;
    range.end += 1;
  }
  let pages: Array<GetRangeTemplateType> =
    currentPage > delta
      ? getRange(Math.min(range.start, totalPages - delta), Math.min(range.end, totalPages))
      : getRange(1, Math.min(totalPages, delta + 1));

  const withDots = (value: number, pair: Array<GetRangeTemplateType>) => (pages.length + 1 !== totalPages ? pair : [value]);

  if (pages[0] !== 1) {
    pages = withDots(1, [1, SEPARATOR]).concat(pages);
  }

  if (pages[pages.length - 1] < totalPages) {
    pages = pages.concat(withDots(totalPages, [SEPARATOR, totalPages]));
  }
  return pages;
}



