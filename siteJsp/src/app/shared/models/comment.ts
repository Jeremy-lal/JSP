import { User } from './user';
export class Comment {
  id: number;
  user_id: User;
  date: Date;
  title: string;
  content: string;
  grp: string;
}
