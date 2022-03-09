import React from 'react'
import { Reset } from 'styled-reset'

import { Chat } from './views'

export const App: React.FC = function () {
  return (
    <React.Fragment>
      <Reset />
      <Chat />
    </React.Fragment>
  )
}
