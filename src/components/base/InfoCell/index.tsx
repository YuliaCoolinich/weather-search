import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface IInfoCell {
  cellName: string;
  cellValue?: number | string;
  specialSymbol?: React.ReactNode;
}

const InfoCell = (props: IInfoCell): JSX.Element => {
  const { cellName, cellValue, specialSymbol } = props;
  return (
    <>
      {cellValue === undefined ? null : (
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography component="span" color="text.secondary" style={{ padding: 5 }}>
            {cellName}
          </Typography>
          <Typography component="span" style={{ padding: 5 }}>
            {cellValue}
            {specialSymbol}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default InfoCell;
