import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import Header from "../Header";
import styles from "./styles";

const Layout = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <styles.Layout>
        <Header />
        <styles.Main>{children}</styles.Main>
      </styles.Layout>
    </MuiThemeProvider>
  );
};

export default Layout;
