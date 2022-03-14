import React from 'react'
import { themes } from 'theme-pallete'

import {
  ModalBackgroundStyle,
  ModalBoxStyle,
  ModalButtonBoxStyle,
  ModalButtonStyle,
  ModalDescriptionBoxStyle,
  ModalTitleStyle,
} from './styles'

type DeleteMessageModalProps = {
  closeModal: () => void
  deleteMessage: () => void
}

export const DeleteMessageModal: React.FC<DeleteMessageModalProps> = function ({
  closeModal,
  deleteMessage,
}) {
  return (
    <ModalBackgroundStyle onClick={closeModal}>
      <ModalBoxStyle onClick={(e) => e.stopPropagation()}>
        <ModalTitleStyle>Delete Comment</ModalTitleStyle>

        <ModalDescriptionBoxStyle>
          Are you sure you want to delete this
          <br />
          comment? This will remove the comment
          <br />
          and can't be undone.
        </ModalDescriptionBoxStyle>

        <ModalButtonBoxStyle>
          <ModalButtonStyle
            bgColor={themes.neutral.grayishBlue}
            onClick={closeModal}>
            NO, CANCEL
          </ModalButtonStyle>
          <ModalButtonStyle bgColor={themes.primary.softRed}>
            YES, DELETE
          </ModalButtonStyle>
        </ModalButtonBoxStyle>
      </ModalBoxStyle>
    </ModalBackgroundStyle>
  )
}
