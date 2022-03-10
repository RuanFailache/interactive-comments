import styled from 'styled-components'
import { themes } from 'theme-pallete'

export const RepliesStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  width: 90%;
  margin-top: 32px;
  padding-left: 5%;
  border-left: solid 2px ${themes.neutral.lightGray};
  float: right;
`
