import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export const ModalMUI = ({ showModal, handleModal, children, styles }) => {
  console.log(showModal)
  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => handleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
