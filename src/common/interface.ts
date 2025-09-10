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
  allReactionCount: number;
  likeCount: number;
  loveCount: number;
  hahaCount: number;
  sadCount: number;
  wowCount: number;
  angryCount: number;
  currentUserReaction?: any;
  reactions?: any[];
  comments?: PostComment[];
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
export type ApiCommentResponse = {
  status: string;
  data: PostComment[];
};

export type MetaData = {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
};

export type UserDTO = {
  id: string;
  username: string;
  email: string;
  avatarUrl: string | null;
};

// 2. Định nghĩa kiểu dữ liệu cho một Comment
export type PostComment = {
  id: string;
  content: string;
  user: UserDTO;
  replyCount: number;
  parentCommentId: string | null;
  likeCount: number;
  loveCount: number;
  hahaCount: number;
  sadCount: number;
  wowCount: number;
  angryCount: number;
  created_at: string;
  updated_at: string;
};

export interface IStatusRequest {
  id: string;
  statusName: string;
  color: string;
  position: string;
  data?: string;
  isStart?: boolean;
  isEnd?: boolean;
  // workflowId: string;
}

export interface ITransitionRequest {
  id: string;
  source: string;
  target: string;
  label: string;
}

export interface IUpdateWorkflow {
  addedStatus: IStatusRequest[];
  updatedStatus: IStatusRequest[];
  deletedStatus: IStatusRequest[];
  addedTransitions: ITransitionRequest[];
  updatedTransitions: ITransitionRequest[];
  deletedTransitions: ITransitionRequest[];
}

export interface IStatusData {
  label: string;
  color: string;
  isStart?: boolean;
  isEnd?: boolean;
}
export interface IStatus {
  id: string;
  data: IStatusData;
}
