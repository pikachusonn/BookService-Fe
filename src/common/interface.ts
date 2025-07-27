import React from "react";

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

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ISelectOptions {
  value: any;
  label: string | React.ReactNode;
}
