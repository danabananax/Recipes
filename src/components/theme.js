import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let customTheme = createTheme(({
  palette: {
    primary: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
    },
    secondary: {
      main: '#f5f5f5',
      light: '#fff',
      dark: '#c2c2c2',
    },
  },
}));

customTheme = responsiveFontSizes(customTheme);

export default customTheme;
