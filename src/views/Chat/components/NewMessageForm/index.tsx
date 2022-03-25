import React, { useState } from 'react'

import {
  NewMessageFormButtonStyle,
  NewMessageFormImageStyle,
  NewMessageFormStyle,
  NewMessageFormTextStyle,
} from './styles'

import { useComment, useUser } from 'contexts'

export const NewMessageForm: React.FC = function () {
  const { user } = useUser()
  const { replyingTo } = useComment()
  const [message, setMessage] = useState('')

  const userAvatar = user ? user.image.png || user.image.webp : ''

  return (
    <NewMessageFormStyle>
      <NewMessageFormImageStyle src={userAvatar} alt="myself" />
      <NewMessageFormTextStyle
        rows={3}
        placeholder="Add a comment..."
        value={
          replyingTo && !message.includes(replyingTo)
            ? `@${replyingTo} ${message}`
            : message
        }
        onChange={(e) => setMessage(e.target.value)}
      />
      <NewMessageFormButtonStyle>Send</NewMessageFormButtonStyle>
    </NewMessageFormStyle>
  )
}
