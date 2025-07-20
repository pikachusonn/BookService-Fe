export interface IPagination {
  pageIndex: number;
  pageSize: number;
  sortBy?: string;
  direction?: string;
}
export interface IBookFilterRequest extends IPagination {
  publisher?: string;
  title?: string;
  id?: string;
  category?: string;
}
