import React from 'react'

import { MessagesListStyle } from './styles'
import { Replies } from './components'

import { Comment } from 'types'
import { useComments } from 'contexts'
import { MessageCard } from 'components'

export const Comments: React.FC = function () {
  const { comments } = useComments()

  return (
    <MessagesListStyle>
      {comments.map((comment: Comment) => (
        <li key={comment.id}>
          <MessageCard message={comment} />
          {comment.replies.length > 0 && <Replies comment={comment} />}
        </li>
      ))}
    </MessagesListStyle>
  )
}
