import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const Tooltips = () => {
  return (
    <Tooltip title="Informations supplémentaires">
      <IconButton>
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Tooltips;
