import React from 'react'

import {
  NewMessageFormButtonStyle,
  NewMessageFormImageStyle,
  NewMessageFormStyle,
  NewMessageFormTextStyle,
} from './styles'

import user from 'assets/avatars/image-juliusomo.png'

export const NewMessageForm: React.FC = function () {
  return (
    <NewMessageFormStyle>
      <NewMessageFormImageStyle src={user} alt="myself" />
      <NewMessageFormTextStyle rows={3} placeholder="Add a comment..." />
      <NewMessageFormButtonStyle>Send</NewMessageFormButtonStyle>
    </NewMessageFormStyle>
  )
}
