import { createTheme } from '@mui/material/styles';

const customTheme = createTheme(({
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
  typography: {
    h2: {
      fontSize: '3.75rem',
      '@media (max-width: 876px)': {
        fontSize: '2.5rem',
      },
    },
  },
}));

export default customTheme;
