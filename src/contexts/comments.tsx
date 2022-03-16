import data from 'data.json'
import React, { createContext, useContext, useEffect, useState } from 'react'

import { Comment } from 'types'

type CommentsContextOutput = {
  comments: Comment[]
}

const Ctx = createContext<CommentsContextOutput>({
  comments: [],
})

export const CommentsContext: React.FC = function ({ children }) {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    setComments(data.comments)
  }, [])

  return <Ctx.Provider value={{ comments }}>{children}</Ctx.Provider>
}

export const useComments = () => useContext(Ctx)
