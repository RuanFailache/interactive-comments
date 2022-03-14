import React from 'react'

import {
  ProfileButtonBoxStyle,
  ProfileButtonStyle,
  ProfileButtonTextStyle,
} from './styles'

import { ReactComponent as EditIcon } from 'assets/icon-edit.svg'
import { ReactComponent as ReplyIcon } from 'assets/icon-reply.svg'
import { ReactComponent as DeleteIcon } from 'assets/icon-delete.svg'

import { User } from 'types'
import { useUser } from 'hooks'
import { themes } from 'theme-pallete'

type ProfileButtonBoxProps = {
  currentUser?: User
}

export const ProfileButtonBox: React.FC<ProfileButtonBoxProps> = function ({
  currentUser,
}) {
  const { checkIfMessageIsFromCurrentUser } = useUser()
  const isFromCurrentUser = checkIfMessageIsFromCurrentUser(currentUser)

  if (isFromCurrentUser) {
    return (
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
    )
  }

  return (
    <ProfileButtonStyle>
      <ReplyIcon />
      <ProfileButtonTextStyle color={themes.primary.moderateBlue}>
        Reply
      </ProfileButtonTextStyle>
    </ProfileButtonStyle>
  )
}
