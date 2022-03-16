import { MessageCard } from 'components'
import React, { Dispatch, SetStateAction } from 'react'

import { Comment } from 'types'
import { NewMessageForm } from 'views/Chat/components/NewMessageForm'
import { RepliesStyle } from './styles'

type RepliesProps = {
  comment: Comment
  isReplying: boolean
  setIsReplying: Dispatch<SetStateAction<boolean>>
}

export const Replies: React.FC<RepliesProps> = function ({
  comment,
  isReplying,
  setIsReplying,
}) {
  if (!isReplying && comment.replies.length === 0) {
    return null
  }

  return (
    <RepliesStyle>
      {comment.replies.map((reply) => (
        <li key={reply.id}>
          <MessageCard message={reply} setIsReplying={setIsReplying} />
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
