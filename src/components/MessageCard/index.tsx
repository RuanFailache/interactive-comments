import React, { useEffect, useState } from 'react'
import { Comment, Message, Reply } from 'types'

import { MessageHeader, MessageLikeControl } from './components'

import {
  MessageCardStyle,
  MessageContainerStyle,
  MessageContentStyle,
} from './styles'

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
