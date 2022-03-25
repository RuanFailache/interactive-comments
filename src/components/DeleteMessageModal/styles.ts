import styled from 'styled-components'
import { themes } from 'theme-pallete'

export const ModalBackgroundStyle = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  cursor: initial;
`

export const ModalBoxStyle = styled.div`
  padding: 24px;
  border-radius: 5px;
  background-color: ${themes.neutral.white};
  box-sizing: border-box;
`

export const ModalTitleStyle = styled.strong`
  font-size: 20px;
  line-height: 32px;
  font-family: 'RubikBold';
  color: ${themes.neutral.darkBlue};
`

export const ModalDescriptionBoxStyle = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 22px;
  font-family: 'RubikRegular';
  color: ${themes.neutral.grayishBlue};
`

export const ModalButtonBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
`

type ModalButtonStyleProps = {
  bgColor: string
}

export const ModalButtonStyle = styled.button<ModalButtonStyleProps>`
  width: 140px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-family: 'RubikBold';
  color: ${themes.neutral.white};
  background-color: ${(props) => props.bgColor};
  white-space: nowrap;
  cursor: pointer;
`
