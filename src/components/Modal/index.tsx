import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import MUI_Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  // TODO add to styles.css file
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: '75%',
};

const BUTTON_CLOSE_TITLE = 'Close';

export interface IModal {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: IModal): JSX.Element => {
  const { open, handleClose, children } = props;

  return (
    <MUI_Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box style={{ display: 'flex', justifyContent: 'right' }}>
          <Tooltip title={BUTTON_CLOSE_TITLE} describeChild followCursor>
            <IconButton aria-label="delete" size="small" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>{children}</Box>
      </Box>
    </MUI_Modal>
  );
};

export default Modal;
