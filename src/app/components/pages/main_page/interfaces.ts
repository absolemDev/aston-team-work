export interface propsFilter {
    name: string;
    filter_param: string;
    cost?: string[];
    format?: string[];
    arrOfInfo: any[];
    change: any
}

export interface paginationNumbers {
    countPerPage: number;
    totalCards: number;
    paginate: any;
}