import styled from 'styled-components'
import { themes } from 'theme-pallete'

export const ProfileButtonBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ProfileButtonStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${themes.neutral.lightGray};
  }
`

export const ProfileButtonTextStyle = styled.span`
  font-family: 'RubikBold';
  font-size: 16px;
  line-height: 26px;
  color: ${(props) => props.color};
`
