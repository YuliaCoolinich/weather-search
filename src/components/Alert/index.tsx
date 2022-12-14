import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import MUI_Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export enum AlertType {
  Error = 'error',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
}
export interface IAlert {
  type: AlertType;
  message: string | null;
  isShown: boolean;
  onCollapse: () => void;
}

const Alert = (props: IAlert): JSX.Element => {
  const { type, message, isShown, onCollapse } = props;

  const handleCollapse = () => {
    onCollapse();
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
      <Collapse in={isShown}>
        <MUI_Alert
          severity={type}
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={handleCollapse}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>{type.toUpperCase()}</AlertTitle>
          {message}
        </MUI_Alert>
      </Collapse>
    </Box>
  );
};

export default Alert;
