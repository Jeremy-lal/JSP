import { User } from './user';
export class Comment {
  id: number;
  user_id: User;
  create_at: Date;
  title: string;
  content: string;
  grp: string;
  comment_id: number;
  show = false;
}
