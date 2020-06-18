import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  border-top: 4px solid #c7c7c7;
  background: #f0f0f0;
  .footer-submenu {
    padding-left: 0 !important;
  }

  .footer-submenu li {
    display: inline;
    font-size: 12px;
    line-height: 24px;
    padding-right: 6px;
    padding-left: 6px;
    font-family: Roboto;
  }
  a {
    font-size: 12px;
    line-height: 24px;
    cursor: pointer;
    background: transparent;
    color: #a2a2a2;
  }
`;

function Footer() {
  return (
    <>
      <FooterStyles className="fixed-bottom d-flex justify-content-center">
        <div className="d-flex justify-content-center pt-3">
          <ul className="footer-submenu ">
            <li>
              <a className="d-inline d-sm-none" href="/terms">
                Terms
              </a>
              <a href="/terms" className="d-none d-sm-inline">
                Terms of Play
              </a>
            </li>
            |
            <li>
              <a href="/privacy" className="d-none d-sm-inline">
                Privacy Policy
              </a>
              <a href="/privacy" className="d-inline d-sm-none">
                privacy
              </a>
            </li>
            |
            <li>
              <a className="d-inline d-sm-none" href="/cookies">
                Cookies
              </a>
              <a href="/cookies" className="d-none d-sm-inline">
                Cookie Policy
              </a>
            </li>
            |
            <li>
              <a className="d-inline d-sm-none" href="/affiliates">
                Affiliates
              </a>
              <a href="/affiliates" className="d-none d-sm-inline">
                Affiliate Programme
              </a>
            </li>
            |
            <li>
              <a href="/contact-us" className="d-none d-sm-inline">
                Contact Us
              </a>
              <a href="/contact-us" className="d-inline d-sm-none">
                Contact Us
              </a>
            </li>
            <li className="d-flex justify-content-center">
              <p>&copy; 1999-2020 Best of the Best plc</p>
            </li>
          </ul>
        </div>
      </FooterStyles>
    </>
  );
}

export default Footer;
