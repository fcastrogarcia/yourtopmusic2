import React from "react";
import { MuiThemeProvider } from "material/styles";
import theme from "theme";
import Header from "components/Header";
import styles from "./styles";

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <styles.Layout>
      <Header />
      {children}
    </styles.Layout>
  </MuiThemeProvider>
);

export default Layout;
