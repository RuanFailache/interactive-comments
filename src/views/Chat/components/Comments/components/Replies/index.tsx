import { MessageCard } from 'components'
import { useComment } from 'contexts'
import React from 'react'

import { Comment } from 'types'
import { NewMessageForm } from 'views/Chat/components/NewMessageForm'
import { RepliesStyle } from './styles'

type RepliesProps = {
  comment: Comment
}

export const Replies: React.FC<RepliesProps> = function ({ comment }) {
  const { isReplying } = useComment()

  if (!isReplying && comment.replies.length === 0) {
    return null
  }

  return (
    <RepliesStyle>
      {comment.replies.map((reply) => (
        <li key={reply.id}>
          <MessageCard message={reply} />
        </li>
      ))}
      {isReplying && (
        <li key="reply">
          <NewMessageForm />
        </li>
      )}
    </RepliesStyle>
  )
}
