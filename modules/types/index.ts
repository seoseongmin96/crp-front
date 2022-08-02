export interface Article {
  userId?: number;
  nickname?: string;
  articleId?: number;
  title?: string;
  content?: string;
  picture?: FileList | string | any;
  writtenDate?: string;
  open?: string;
  comment?: string;
  qna?: string;
  pictureName?: string;
  size?: number;
}
export interface User {
  userId?: number;
  password?: string;
}
export interface ArticleState {
  data: Article;
  status: "successed" | "loading" | "failed";
  error: null;
}
export interface UserState {
  data: User;
  status: "successed" | "loading" | "failed";
  error: null;
}

export interface UploadFileResponse {
  success: boolean;
  message: string;
}
export interface ValidatorResponse {
  isValid: boolean;
  errorMessage: string;
}

export const fileTypes = ["jpg", "png"];
