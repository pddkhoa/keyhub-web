interface BlogPost {
  id: number;
  title: string;
  content: string;
  description: string;
  create_date: string;
  avatar: string | null;
  status_id: number;
  likes: number | null;
  categories: Category;
  tags: Tag[];
  series: BlogSeries;
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
