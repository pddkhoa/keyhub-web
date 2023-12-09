import User from "./user";

export interface Chat {
  id: number;
  chat_name: string | null;
  admins: User[];
  chat_image: string | null;
  createdBy: User;
  users: User[];
  messages: any[]; // Replace 'any' with the actual type if messages have a specific structure
  group: boolean;
}

export interface ChatMessage {
  id: number;
  timestamp: Date;
  user_create: number;
  chat_id: number;
  content: string;
}
