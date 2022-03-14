import data from 'data.json'
import React, { createContext, useContext, useEffect, useState } from 'react'

import { Comment } from 'types'

type CommentsContextOutput = {
  comments: Comment[]
  isReplying: boolean
  showReplyForm: () => void
}

const Ctx = createContext<CommentsContextOutput>({
  comments: [],
  isReplying: false,
  showReplyForm: () => false,
})

export const CommentsContext: React.FC = function ({ children }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [isReplying, setIsReplying] = useState(false)

  useEffect(() => {
    setComments(data.comments)
  }, [])

  const showReplyForm = () => setIsReplying(true)

  return (
    <Ctx.Provider value={{ comments, isReplying, showReplyForm }}>
      {children}
    </Ctx.Provider>
  )
}

export const useComments = () => useContext(Ctx)
