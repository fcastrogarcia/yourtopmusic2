import React from "react";
import { MuiThemeProvider } from "material/styles";
import theme from "theme";
import LeftSidebar from "components/LeftSidebar";
import styles from "./styles";

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <styles.Layout>
      <LeftSidebar />
      {children}
    </styles.Layout>
  </MuiThemeProvider>
);

export default Layout;
