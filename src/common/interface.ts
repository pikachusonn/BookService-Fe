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
  id: string;
  posted_by: string | null;
  userName: string | null;
  avatarUrl: string | null;
  title: string;
  content: string;
  imageUrls: string[];
  created_at: string | null;
  updated_at: string | null;
  commentCount: number;
  reactionCount: number;
  likeCount: number;
  loveCount: number;
  hahaCount: number;
  sadCount: number;
  wowCount: number;
  angryCount: number;
  currentUserReaction?: any;
  reactions?: any[];
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

export interface IUpsertReaction {
  type: string;
  postId: string;
  reactionId?: string;
}

export type MetaData = {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
};
