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
  email: string;
  password: string;
}

export interface ISelectOptions {
  value: any;
  label: string | React.ReactNode;
}

export interface Post {
  id: number;
  posted_by: string | null;
  title: string;
  content: string;
  imageUrls: string[];
  created_at: string | null;
  updated_at: string | null;
}

export interface ApiPostResponse {
  data: Post[];
  metadata: {
    page: number;
    size: number;
    totalPages: number;
    totalElements: number;
  };
}

export type MetaData = {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
};
