import React from "react";
import { MuiThemeProvider } from "material/styles";
import theme from "theme";
import RightSidebar from "components/RightSidebar";
import styles from "./styles";

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <styles.Layout>
      {children}
      <RightSidebar />
    </styles.Layout>
  </MuiThemeProvider>
);

export default Layout;
