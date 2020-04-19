import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";

const Layout = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <main>{children}</main>
    </MuiThemeProvider>
  );
};

export default Layout;
