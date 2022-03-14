import React from 'react'

import {
  HeaderBoxStyle,
  ProfileBoxStyle,
  ProfileImageStyle,
  ProfileNameStyle,
  ProfilePostedAtStyle,
  ProfileButtonStyle,
  ProfileButtonTextStyle,
  ProfileButtonBoxStyle,
} from './styles'

import { ReactComponent as ReplyIcon } from 'assets/icon-reply.svg'
import { ReactComponent as EditIcon } from 'assets/icon-edit.svg'
import { ReactComponent as DeleteIcon } from 'assets/icon-delete.svg'

import { Message } from 'types'
import { useUser } from 'hooks'
import { themes } from 'theme-pallete'

type MessageHeaderProps = {
  profile: Partial<Message>
}

export const MessageHeader: React.FC<MessageHeaderProps> = function ({
  profile: { user, createdAt },
}) {
  const { checkIfMessageIsFromCurrentUser } = useUser()
  const isFromCurrentUser = checkIfMessageIsFromCurrentUser(user)

  return (
    <HeaderBoxStyle>
      <ProfileBoxStyle>
        <ProfileImageStyle
          src={user?.image.png || user?.image.webp}
          alt="profile"
        />
        <ProfileNameStyle>{user?.username}</ProfileNameStyle>
        <ProfilePostedAtStyle>{createdAt}</ProfilePostedAtStyle>
      </ProfileBoxStyle>
      {isFromCurrentUser ? (
        <ProfileButtonBoxStyle>
          <ProfileButtonStyle>
            <DeleteIcon />
            <ProfileButtonTextStyle color={themes.primary.softRed}>
              Delete
            </ProfileButtonTextStyle>
          </ProfileButtonStyle>
          <ProfileButtonStyle>
            <EditIcon />
            <ProfileButtonTextStyle color={themes.primary.moderateBlue}>
              Edit
            </ProfileButtonTextStyle>
          </ProfileButtonStyle>
        </ProfileButtonBoxStyle>
      ) : (
        <ProfileButtonStyle>
          <ReplyIcon />
          <ProfileButtonTextStyle color={themes.primary.moderateBlue}>
            Reply
          </ProfileButtonTextStyle>
        </ProfileButtonStyle>
      )}
    </HeaderBoxStyle>
  )
}
