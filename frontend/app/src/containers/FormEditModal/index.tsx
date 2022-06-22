import React from 'react'
import {
  Box,
  ModalCloseButton,
  Modal,
  ModalContent,
  ModalHeader
} from '@citric/core/dist'
import { SxProp } from '@citric/core/dist/component-style'
import FormLink from 'components/FormLink'

const styles: Record<string, Record<string, SxProp> | SxProp> = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  content: {
    padding: 0
  },
  close: {
    position: 'absolute',
    left: '95%',
    top: '5%'
  }
}
const FormEditModal = ({ data, onCloseModal }: any) => {
  const onClose = () => {
    onCloseModal()
  }

  return (
    <>
      <Modal sx={styles.modal}>
        <Box sx={styles.close}>
          <ModalCloseButton onClick={onClose} />
        </Box>
        <ModalContent sx={styles.content}>
          <FormLink visibility="EDIT" values={data} modal={onClose} />
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormEditModal
