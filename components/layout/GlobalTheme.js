import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  orange: `#f68108`,
  mainDark: `rgb(105, 105, 113)`,
};

export const GlobalStyle = createGlobalStyle`
   html {
     height:100vh;
     box-sizing: border-box;
     font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    height:100%;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: Roboto sans-serif !important;
    font-weight: 600;
    font-display: fallback;
    background-color: ${(props) => props.theme.mainLight};
    color: ${(props) => props.theme.mainDark};
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
  }
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0rem !important;
  }
  a {
    text-decoration: none !important;
    color: ${theme.mainDark};
  }
  p{
    font-weight:500 !important;
    margin-bottom:0 !important;
  }
  #__next{
    height:100%;
  }
`;
