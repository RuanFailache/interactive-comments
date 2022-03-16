import React, { useState } from 'react'

import { MessagesListStyle } from './styles'
import { Replies } from './components'

import { Comment } from 'types'
import { useComments } from 'contexts'
import { MessageCard } from 'components'

type CommentContainerProps = {
  comment: Comment
}

const CommentContainer: React.FC<CommentContainerProps> = function ({
  comment,
}) {
  const [isReplying, setIsReplying] = useState(false)

  return (
    <li key={comment.id}>
      <MessageCard message={comment} setIsReplying={setIsReplying} />
      <Replies
        comment={comment}
        isReplying={isReplying}
        setIsReplying={setIsReplying}
      />
    </li>
  )
}

export const Comments: React.FC = function () {
  const { comments } = useComments()

  return (
    <MessagesListStyle>
      {comments.map((comment: Comment) => (
        <CommentContainer comment={comment} />
      ))}
    </MessagesListStyle>
  )
}
