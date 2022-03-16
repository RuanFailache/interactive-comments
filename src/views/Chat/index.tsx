import React from 'react'

import { NewMessageForm, Comments } from './components'
import { ChatContainerStyle, ChatFooterStyle } from './styles'

export const Chat: React.FC = function () {
  return (
    <ChatContainerStyle>
      <Comments />
      <ChatFooterStyle>
        <NewMessageForm />
      </ChatFooterStyle>
    </ChatContainerStyle>
  )
}
