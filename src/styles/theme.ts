import { createMuiTheme } from '@material-ui/core';

export const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Montserrat", "Roboto", sans-serif`,
  },

  palette: {
    primary: {
      main: '#386DB3',
    },
    secondary: {
      main: '#FFF',
    },
  },
});
