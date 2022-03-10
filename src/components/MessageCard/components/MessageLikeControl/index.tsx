import React from 'react'

import {
  ControlBoxStyle,
  ControlButtonStyle,
  ControlLikeTextStyle,
} from './styles'

import { ReactComponent as PlusIcon } from 'assets/icon-plus.svg'
import { ReactComponent as MinusIcon } from 'assets/icon-minus.svg'

type MessageLikeControlProps = {
  score: number
}

export const MessageLikeControl: React.FC<MessageLikeControlProps> = function ({
  score
}) {
  return (
    <ControlBoxStyle>
      <ControlButtonStyle>
        <PlusIcon />
      </ControlButtonStyle>
      <ControlLikeTextStyle>{score}</ControlLikeTextStyle>
      <ControlButtonStyle>
        <MinusIcon />
      </ControlButtonStyle>
    </ControlBoxStyle>
  )
}
