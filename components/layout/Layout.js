// \src/components/Layout.js
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from './GlobalTheme';
import { withRedux } from '../../config/with-redux-store';
import Navbar from './Navbar';
import Footer from './Footer';
import Meta from './Meta';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme} className="container-fluid">
      <Meta />
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default withRedux(Layout);
