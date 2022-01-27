import { Theme, createTheme } from '@mui/material/styles';
import createPalette, { PaletteOptions } from '@mui/material/styles/createPalette';
import { frFR } from '@mui/material/locale';

export const darkOrange = '#FF8C00';
export const ghostWhite = '#f5f6fa';
export const pistachio = '#91c36e';
export const blackColor = 'rgba(0, 0, 0, 0.54)';
export const orangeRedCrayola = '#FF554B';
export const pureBlackColor = '#fff';
export const pureWhiteColor = '#fff';

export const palette = createPalette({
  primary: {
    main: darkOrange,
  },
  secondary: {
    main: ghostWhite,
  },
  error: {
    main: orangeRedCrayola,
  },
  info: {
    main: pistachio,
  },
  default: {
    main: blackColor,
  },
} as PaletteOptions);

export const muiTheme = createTheme(
  {
    palette,
    components: {},
  } as Theme,
  frFR, // locale FR pour Mui
);
