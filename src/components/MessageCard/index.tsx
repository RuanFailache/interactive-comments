import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Comment, Message, Reply } from 'types'

import { MessageHeader, MessageLikeControl } from './components'

import {
  MessageCardStyle,
  MessageContainerStyle,
  MessageContentStyle,
} from './styles'

type MessageCardProps = {
  message: Comment | Reply
  setIsReplying: Dispatch<SetStateAction<boolean>>
}

export const MessageCard: React.FC<MessageCardProps> = function ({
  message: { content, createdAt, user, score },
  setIsReplying,
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
        <MessageHeader profile={profile} setIsReplying={setIsReplying} />
        <MessageContentStyle>{content}</MessageContentStyle>
      </MessageContainerStyle>
    </MessageCardStyle>
  )
}
