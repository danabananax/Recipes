import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let customTheme = createTheme(({
  palette: {
    primary: {
      main: '#087f23',
    },
    secondary: {
      main: '#e5e5e5',
      light: '#fff',
      dark: '#c2c2c2',
    },
  },
}));

customTheme = responsiveFontSizes(customTheme);

export default customTheme;
