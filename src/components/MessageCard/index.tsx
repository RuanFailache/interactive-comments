import React, { useEffect, useState } from 'react'

import { MessageHeader, MessageLikeControl } from './components'

import {
  MessageCardStyle,
  MessageContainerStyle,
  MessageContentStyle,
} from './styles'

type User = {
  image: {
    png: string,
    webp: string
  },
  username: string
}

type Message = {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  user: User
}

type Reply = Message & {
  replyingTo: string
}

type Comment = Message & {
  replies: Reply[]
}

type MessageCardProps = {
  message: Comment | Reply
}

export const MessageCard: React.FC<MessageCardProps> = function ({
  message: { content, createdAt, user, score }
}) {
  const [profile, setProfile] = useState<Partial<Message>>()

  useEffect(() => {
    setProfile({ user, createdAt })
  }, [user, createdAt])

  if (!profile) {
    return null
  }

  return (
    <MessageCardStyle>
      <MessageLikeControl score={score} />
      <MessageContainerStyle>
        <MessageHeader profile={profile} />
        <MessageContentStyle>{content}</MessageContentStyle>
      </MessageContainerStyle>
    </MessageCardStyle>
  )
}
