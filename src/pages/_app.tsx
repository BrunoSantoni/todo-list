/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core';
import { THEME } from '../styles/theme';

// import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <MuiThemeProvider theme={THEME}>
    <CssBaseline />
    <Component {...pageProps} />
  </MuiThemeProvider>
);

export default MyApp;
