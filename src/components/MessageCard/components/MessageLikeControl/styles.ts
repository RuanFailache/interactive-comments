import styled from 'styled-components'
import { themes } from 'theme-pallete'

export const ControlBoxStyle = styled.aside`
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${themes.neutral.lightGray};
`

export const ControlButtonStyle = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const ControlLikeTextStyle = styled.span`
  display: block;
  font-size: 16px;
  line-height: 26px;
  font-family: RubikBold;
  color: ${themes.primary.moderateBlue};
`
