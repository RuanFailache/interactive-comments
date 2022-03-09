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

import { ReactComponent as ReplyIcon } from 'assets/icon-reply.svg'

type MessageHeaderProps = {
  profile: {
    image: string
    name: string
    postedAt: string
  }
}

export const MessageHeader: React.FC<MessageHeaderProps> = function ({
  profile,
}) {
  return (
    <HeaderBoxStyle>
      <ProfileBoxStyle>
        <ProfileImageStyle src={profile.image} alt="profile" />
        <ProfileNameStyle>{profile.name}</ProfileNameStyle>
        <ProfilePostedAtStyle>{profile.postedAt}</ProfilePostedAtStyle>
      </ProfileBoxStyle>
      <ReplyButtonStyle type="button">
        <ReplyIcon />
        <ReplyButtonTextStyle>Reply</ReplyButtonTextStyle>
      </ReplyButtonStyle>
    </HeaderBoxStyle>
  )
}
