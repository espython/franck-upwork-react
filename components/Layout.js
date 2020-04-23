// \src/components/Layout.js
import React from "react";
import { withRedux } from "../config/with-redux-store";

function Layout({ children }) {
  return <div>{children}</div>;
}

export default withRedux(Layout);