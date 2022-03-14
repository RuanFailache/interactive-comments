import React from 'react'

import {
  NewMessageFormButtonStyle,
  NewMessageFormImageStyle,
  NewMessageFormStyle,
  NewMessageFormTextStyle,
} from './styles'

import { useUser } from 'hooks'

export const NewMessageForm: React.FC = function () {
  const { user } = useUser()

  const userAvatar = user ? user.image.png || user.image.webp : ''

  return (
    <NewMessageFormStyle>
      <NewMessageFormImageStyle src={userAvatar} alt="myself" />
      <NewMessageFormTextStyle rows={3} placeholder="Add a comment..." />
      <NewMessageFormButtonStyle>Send</NewMessageFormButtonStyle>
    </NewMessageFormStyle>
  )
}
