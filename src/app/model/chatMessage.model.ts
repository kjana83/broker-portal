import { User } from './user.model';

export class ChatMessage {
  user: User;
  messages: any = [];
  newMessage: boolean;
}
