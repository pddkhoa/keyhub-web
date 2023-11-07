import User from "./user";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  description: string;
  views?: number | null;
  create_date?: string;
  avatar: string;
  status_id?: number;
  likes?: number;
  categories: Category;
  tags: Tag[];
  series: BlogSeries; // Nếu series có thể là một object thì bạn cần định nghĩa một interface riêng cho nó
  isLike?: boolean;
  isSave?: boolean;
  users: User;
  sumComment?: number;
}

interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

interface BlogSeries {
  id: number;
  name: string;
  sumBlog: number;
  description: string;
  createday: string;
}

export default BlogPost;
