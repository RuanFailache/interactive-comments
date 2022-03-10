import { User } from "./user"

export type Message = {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  user: User
}

export type Reply = Message & {
  replyingTo: string
}

export type Comment = Message & {
  replies: Reply[]
}
