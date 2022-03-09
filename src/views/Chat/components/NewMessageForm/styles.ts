import styled from 'styled-components'
import { themes } from 'theme-pallete'

export const NewMessageFormStyle = styled.form`
  position: fixed;
  bottom: 64px;
  left: calc((100% - 1150px) / 2);

  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 1150px;
  padding: 32px;
  border-radius: 5px;

  background-color: ${themes.neutral.white};
  box-shadow: 0 0 8px 2px ${themes.neutral.lightGray};
  box-sizing: border-box;
`

export const NewMessageFormImageStyle = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  object-fit: cover;
`

export const NewMessageFormTextStyle = styled.textarea`
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: solid 1px ${themes.neutral.lightGray};
  border-radius: 5px;
  font-size: 16px;
  line-height: 26px;
  font-family: RubikRegular;
  color: ${themes.neutral.grayishBlue};
  resize: none;
  outline: none;
`

export const NewMessageFormButtonStyle = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  font-size: 16px;
  line-height: 26px;
  border: none;
  border-radius: 5px;
  color: ${themes.neutral.white};
  background-color: ${themes.primary.moderateBlue};
`
