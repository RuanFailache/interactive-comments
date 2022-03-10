import React from 'react'

import {
  HeaderBoxStyle,
  ProfileBoxStyle,
  ProfileImageStyle,
  ProfileNameStyle,
  ProfilePostedAtStyle,
  ReplyButtonStyle,
  ReplyButtonTextStyle,
} from './styles'

import { Message } from 'types'
import { ReactComponent as ReplyIcon } from 'assets/icon-reply.svg'

type MessageHeaderProps = {
  profile: Partial<Message>
}

export const MessageHeader: React.FC<MessageHeaderProps> = function ({
  profile: { user, createdAt },
}) {
  return (
    <HeaderBoxStyle>
      <ProfileBoxStyle>
        <ProfileImageStyle src={user?.image.png || user?.image.webp} alt="profile" />
        <ProfileNameStyle>{user?.username}</ProfileNameStyle>
        <ProfilePostedAtStyle>{createdAt}</ProfilePostedAtStyle>
      </ProfileBoxStyle>
      <ReplyButtonStyle type="button">
        <ReplyIcon />
        <ReplyButtonTextStyle>Reply</ReplyButtonTextStyle>
      </ReplyButtonStyle>
    </HeaderBoxStyle>
  )
}
