import { useEffect, useState } from 'react'

import data from 'data.json'

import { User } from 'types'

export const useUser = function () {
  const [user, setUser] = useState<User | null>(null)
  
  useEffect(() => {    
    setUser(data.currentUser)
  }, [])

  return user
}
