import React from "react";
import { MuiThemeProvider } from "material/styles";
import theme from "theme";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./styles";
import useDevices from "hooks/useDevices";

const Layout = ({ children }) => {
  const { tablet: isTablet } = useDevices();

  return (
    <MuiThemeProvider theme={theme}>
      <styles.Layout>
        <Header />
        {children}
        {!isTablet && <Footer />}
      </styles.Layout>
    </MuiThemeProvider>
  );
};

export default Layout;
