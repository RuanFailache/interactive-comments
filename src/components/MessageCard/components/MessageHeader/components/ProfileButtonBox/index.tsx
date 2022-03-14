import React, { useState } from 'react'

import {
  ProfileButtonBoxStyle,
  ProfileButtonStyle,
  ProfileButtonTextStyle,
} from './styles'

import { ReactComponent as EditIcon } from 'assets/icon-edit.svg'
import { ReactComponent as ReplyIcon } from 'assets/icon-reply.svg'
import { ReactComponent as DeleteIcon } from 'assets/icon-delete.svg'

import { User } from 'types'
import { useComments, useUser } from 'contexts'
import { themes } from 'theme-pallete'
import { DeleteMessageModal } from 'components'

type ProfileButtonBoxProps = {
  currentUser?: User
}

export const ProfileButtonBox: React.FC<ProfileButtonBoxProps> = function ({
  currentUser,
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const { showReplyForm } = useComments()

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
    <ProfileButtonStyle onClick={showReplyForm}>
      <ReplyIcon />
      <ProfileButtonTextStyle color={themes.primary.moderateBlue}>
        Reply
      </ProfileButtonTextStyle>
    </ProfileButtonStyle>
  )
}
