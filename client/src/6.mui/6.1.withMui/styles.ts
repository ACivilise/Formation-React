import { SxProps } from '@mui/material';
import { muiTheme } from 'mui/theme';

export const MainBox = {
  width: '50%',
  paddingTop: '25px',
  [muiTheme.breakpoints.up('md')]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  [muiTheme.breakpoints.down('md')]: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
} as SxProps;
