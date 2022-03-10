import { MessageCard } from 'components'
import React from 'react'

import { Comment } from 'types'
import { RepliesStyle } from './styles'

type RepliesProps = {
  comment: Comment
}

export const Replies: React.FC<RepliesProps> = function ({
  comment
}) {
  return (
    <RepliesStyle>
      {comment.replies.map((reply) => (
        <li key={reply.id}>
          <MessageCard message={reply} />
        </li>
      ))}
    </RepliesStyle>
  )
}
