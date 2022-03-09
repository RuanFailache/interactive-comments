import React from 'react'

import { MessageHeader, MessageLikeControl } from './components'

import {
  MessageCardStyle,
  MessageContainerStyle,
  MessageContentStyle,
} from './styles'

type MessageCardProps = {
  message: {
    id: number
    profile: {
      image: string
      name: string
      postedAt: string
    }
    text: string
  }
}

export const MessageCard: React.FC<MessageCardProps> = function ({
  message: { profile, text },
}) {
  return (
    <MessageCardStyle>
      <MessageLikeControl />
      <MessageContainerStyle>
        <MessageHeader profile={profile} />
        <MessageContentStyle>{text}</MessageContentStyle>
      </MessageContainerStyle>
    </MessageCardStyle>
  )
}
