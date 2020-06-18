import App from 'next/app';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/Layout';

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MainApp;
