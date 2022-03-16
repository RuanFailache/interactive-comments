import React, { createContext, useContext, useState } from 'react'

type CommentContextOutput = {
  isReplying: boolean
  replyComment: () => void
}

const Ctx = createContext<CommentContextOutput>({
  isReplying: false,
  replyComment: () => {},
})

export const CommentContext: React.FC = function ({ children }) {
  const [isReplying, setIsReplying] = useState(false)

  const replyComment = () => setIsReplying(true)

  return (
    <Ctx.Provider value={{ isReplying, replyComment }}>{children}</Ctx.Provider>
  )
}

export const useComment = () => useContext(Ctx)
