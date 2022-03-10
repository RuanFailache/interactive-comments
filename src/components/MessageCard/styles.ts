import styled from 'styled-components'
import { themes } from 'theme-pallete'

export const MessageCardStyle = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 32px;

  padding: 32px;
  border-radius: 5px;

  background-color: ${themes.neutral.white};
  box-shadow: 0 0 8px 2px ${themes.neutral.lightGray};
  box-sizing: border-box;
`

export const MessageContainerStyle = styled.main`
  width: 100%;
`

export const MessageContentStyle = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-family: RubikRegular;
  color: ${themes.neutral.grayishBlue};
`
