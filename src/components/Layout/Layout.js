import React from "react";
import { MuiThemeProvider } from "material/styles";
import theme from "theme";
import Sidebar2 from "components/Sidebar2";
import styles from "./styles";

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <styles.Layout>
      {children}
      <Sidebar2 />
    </styles.Layout>
  </MuiThemeProvider>
);

export default Layout;
