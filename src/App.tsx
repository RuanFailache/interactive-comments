import { CommentsContext, UserContext } from 'contexts'
import React from 'react'
import { Reset } from 'styled-reset'

import { Chat } from './views'

export const App: React.FC = function () {
  return (
    <UserContext>
      <CommentsContext>
        <Reset />
        <Chat />
      </CommentsContext>
    </UserContext>
  )
}
