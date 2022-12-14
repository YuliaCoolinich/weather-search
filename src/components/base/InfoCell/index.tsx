import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface IInfoCell {
  cellName: string;
  cellValue?: number | string;
  unit?: string;
  specialSymbol?: React.ReactNode;
}

const InfoCell = (props: IInfoCell): JSX.Element => {
  const { cellName, cellValue, unit, specialSymbol } = props;
  return (
    <>
      {cellValue === undefined ? null : (
        <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Typography
            component="span"
            color="text.secondary"
            style={{ padding: 5, width: '60%', textAlign: 'start', boxSizing: 'border-box', alignSelf: 'center' }}
          >
            {cellName}
          </Typography>
          <Typography
            component="span"
            style={{ padding: 5, width: '40%', textAlign: 'start', boxSizing: 'border-box', alignSelf: 'center' }}
          >
            <Typography component="span" style={{ padding: 5 }}>
              {cellValue}
            </Typography>
            <Typography component="span" style={{ padding: 5 }}>
              {unit ?? specialSymbol}
            </Typography>
          </Typography>
        </Box>
      )}
    </>
  );
};

export default InfoCell;
