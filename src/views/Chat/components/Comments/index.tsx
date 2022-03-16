import React from 'react'

import { MessagesListStyle } from './styles'
import { Replies } from './components'

import { Comment } from 'types'
import { CommentContext, useComments } from 'contexts'
import { MessageCard } from 'components'

type CommentContainerProps = {
  comment: Comment
}

const CommentContainer: React.FC<CommentContainerProps> = function ({
  comment,
}) {
  return (
    <li key={comment.id}>
      <MessageCard message={comment} />
      <Replies comment={comment} />
    </li>
  )
}

export const Comments: React.FC = function () {
  const { comments } = useComments()

  return (
    <MessagesListStyle>
      {comments.map((comment: Comment) => (
        <CommentContext>
          <CommentContainer comment={comment} />
        </CommentContext>
      ))}
    </MessagesListStyle>
  )
}
