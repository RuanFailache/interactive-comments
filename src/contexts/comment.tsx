import React, { createContext, useContext, useState } from 'react'

type CommentContextOutput = {
  isReplying: boolean
  replyingTo: string
  replyComment: (replyingTo?: string) => void
}

const Ctx = createContext<CommentContextOutput>({
  isReplying: false,
  replyingTo: '',
  replyComment: () => {},
})

export const CommentContext: React.FC = function ({ children }) {
  const [isReplying, setIsReplying] = useState(false)
  const [replyingTo, setReplyingTo] = useState('')

  const replyComment = (replyingTo?: string) => {
    setIsReplying(true)
    setReplyingTo(replyingTo || '')
  }

  return (
    <Ctx.Provider value={{ isReplying, replyingTo, replyComment }}>
      {children}
    </Ctx.Provider>
  )
}

export const useComment = () => useContext(Ctx)
