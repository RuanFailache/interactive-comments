import styled from 'styled-components'

const NEW_MESSAGE_FORM_HEIGHT = 158

export const ChatContainerStyle = styled.main`
  position: absolute;
  left: calc((100% - 1150px) / 2);
  height: calc(100vh - ${NEW_MESSAGE_FORM_HEIGHT}px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`
