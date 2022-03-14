import data from 'data.json'
import { useEffect, useState } from 'react'

import { Comment } from 'types'

type CommentHookOutput = {
  comments: Comment[]
}

type CommentHook = () => CommentHookOutput

export const useComments: CommentHook = function () {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    setComments(data.comments)
  }, [])

  return {
    comments,
  }
}
