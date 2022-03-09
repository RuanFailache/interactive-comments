import styled from 'styled-components'

export const ChatContainerStyle = styled.main`
  position: absolute;
  top: 64px;
  bottom: 64px;
  left: calc((100% - 1150px) / 2);
  height: calc(100vh - 128px - 64px - 16px - 78px - 32px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const MessagesListStyle = styled.ul`
  display: flex;
  flex-flow: nowrap column;
  gap: 32px;
`
