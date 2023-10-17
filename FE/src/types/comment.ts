import User from "./user";

interface CommentType {
  id: number;
  content: string;
  parentComment: CommentType | null;
  users: User;
  createdAt: string;
}

export default CommentType;
