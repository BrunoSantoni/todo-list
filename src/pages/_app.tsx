/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core';
import { Provider as ReduxProvider } from 'react-redux';
import { THEME } from '../styles/theme';

import store from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ReduxProvider store={store}>
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  </ReduxProvider>
);

export default MyApp;
