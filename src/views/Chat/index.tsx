import React from 'react'

import { NewMessageForm, Comments } from './components'
import { ChatContainerStyle } from './styles'

export const Chat: React.FC = function () {
  return (
    <ChatContainerStyle>
      <Comments />
      <NewMessageForm />
    </ChatContainerStyle>
  )
}
