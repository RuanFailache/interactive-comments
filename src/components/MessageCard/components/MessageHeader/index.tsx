import React, { Dispatch, SetStateAction } from 'react'

import {
  HeaderBoxStyle,
  ProfileBoxStyle,
  ProfileImageStyle,
  ProfileNameStyle,
  ProfilePostedAtStyle,
} from './styles'

import { Message } from 'types'
import { ProfileButtonBox } from './components'

type MessageHeaderProps = {
  profile: Partial<Message>
  setIsReplying: Dispatch<SetStateAction<boolean>>
}

export const MessageHeader: React.FC<MessageHeaderProps> = function ({
  profile: { user, createdAt },
  setIsReplying,
}) {
  const profileImageSource = user?.image.png || user?.image.webp

  return (
    <HeaderBoxStyle>
      <ProfileBoxStyle>
        <ProfileImageStyle src={profileImageSource} alt="profile" />
        <ProfileNameStyle>{user?.username}</ProfileNameStyle>
        <ProfilePostedAtStyle>{createdAt}</ProfilePostedAtStyle>
      </ProfileBoxStyle>
      <ProfileButtonBox currentUser={user} setIsReplying={setIsReplying} />
    </HeaderBoxStyle>
  )
}
