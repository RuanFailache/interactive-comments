import data from 'data.json'
import { useEffect, useState } from 'react'

import { Comment } from 'types'

export const useComments = function () {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    setComments(data.comments)
  }, [])

  return comments
}
