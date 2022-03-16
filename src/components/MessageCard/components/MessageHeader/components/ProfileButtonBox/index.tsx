import React, { Dispatch, SetStateAction, useState } from 'react'

import {
  ProfileButtonBoxStyle,
  ProfileButtonStyle,
  ProfileButtonTextStyle,
} from './styles'

import { ReactComponent as EditIcon } from 'assets/icon-edit.svg'
import { ReactComponent as ReplyIcon } from 'assets/icon-reply.svg'
import { ReactComponent as DeleteIcon } from 'assets/icon-delete.svg'

import { User } from 'types'
import { useUser } from 'contexts'
import { themes } from 'theme-pallete'
import { DeleteMessageModal } from 'components'

type ProfileButtonBoxProps = {
  currentUser?: User
  setIsReplying: Dispatch<SetStateAction<boolean>>
}

export const ProfileButtonBox: React.FC<ProfileButtonBoxProps> = function ({
  currentUser,
  setIsReplying,
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const { checkIfMessageIsFromCurrentUser } = useUser()
  const isMessageFromCurrentUser = checkIfMessageIsFromCurrentUser(currentUser)

  const handleDeleteMessage = () => {
    setIsDeleteModalOpen((prev) => !prev)
  }

  if (isMessageFromCurrentUser) {
    return (
      <ProfileButtonBoxStyle>
        <ProfileButtonStyle onClick={handleDeleteMessage}>
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

        {isDeleteModalOpen && (
          <DeleteMessageModal
            closeModal={() => setIsDeleteModalOpen(false)}
            deleteMessage={() => {}}
          />
        )}
      </ProfileButtonBoxStyle>
    )
  }

  return (
    <ProfileButtonStyle onClick={() => setIsReplying(true)}>
      <ReplyIcon />
      <ProfileButtonTextStyle color={themes.primary.moderateBlue}>
        Reply
      </ProfileButtonTextStyle>
    </ProfileButtonStyle>
  )
}
