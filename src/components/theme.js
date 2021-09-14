import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#601edb',
      light: '#9952ff',
      dark: '#1500a8',
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
});

export default theme;
