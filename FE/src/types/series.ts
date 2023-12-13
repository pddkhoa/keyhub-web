interface seriesType {
  id: number;
  name: string;
  sumBlog: number;
  image?: null | string; // Assuming image can be null or a string
  description: string;
  createday: string; // You might want to use a Date type if you want to represent a date
}
export default seriesType;
