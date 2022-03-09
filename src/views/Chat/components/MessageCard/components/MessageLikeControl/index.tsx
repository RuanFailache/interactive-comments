import React from 'react'

import {
  ControlBoxStyle,
  ControlButtonStyle,
  ControlLikeTextStyle,
} from './styles'

import { ReactComponent as PlusIcon } from 'assets/icon-plus.svg'
import { ReactComponent as MinusIcon } from 'assets/icon-minus.svg'

const likes = 12

export const MessageLikeControl: React.FC = function () {
  return (
    <ControlBoxStyle>
      <ControlButtonStyle>
        <PlusIcon />
      </ControlButtonStyle>
      <ControlLikeTextStyle>{likes}</ControlLikeTextStyle>
      <ControlButtonStyle>
        <MinusIcon />
      </ControlButtonStyle>
    </ControlBoxStyle>
  )
}
