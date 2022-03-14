import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import data from 'data.json'

import { User } from 'types'

type UserContextOutput = {
  user?: User
  checkIfMessageIsFromCurrentUser: (currentUser?: User) => boolean
}

const Ctx = createContext<UserContextOutput>({
  checkIfMessageIsFromCurrentUser: () => false,
})

export const UserContext: React.FC = function ({ children }) {
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

  return (
    <Ctx.Provider value={{ user, checkIfMessageIsFromCurrentUser }}>
      {children}
    </Ctx.Provider>
  )
}

export const useUser = () => useContext(Ctx)
