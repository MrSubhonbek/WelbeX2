export interface IExpenses {
  _id: number;
  date: string;
  name: string;
  count: number;
  distance: number;
}
export interface IArrayExpenses {
  data: IExpenses[];
}
export type TypeProps = {
  children: JSX.Element;
};
export interface ILimit {
  start: number;
  end: number;
}
export interface ISortData {
  sortColum: string;
  limit: ILimit;
}
export interface ISearchData {
  searchValue: string;
  limit: ILimit;
}
