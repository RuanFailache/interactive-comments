import { useCallback, useEffect, useState } from 'react'

import data from 'data.json'

import { User } from 'types'

type UserHookOutput = {
  user?: User
  checkIfMessageIsFromCurrentUser: (currentUser?: User) => boolean
}

type UserHook = () => UserHookOutput

export const useUser: UserHook = function () {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    setUser(data.currentUser)
  }, [])

  const checkIfMessageIsFromCurrentUser = useCallback(
    (currentUser?: User) => {
      if (user && currentUser) {
        return user.username === currentUser.username
      }
      return false
    },
    [user]
  )

  return {
    user,
    checkIfMessageIsFromCurrentUser,
  }
}
