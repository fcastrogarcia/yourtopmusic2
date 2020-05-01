import { createMuiTheme } from "@material-ui/core/styles";
import breakpoints from "./breakpoints";
import typography from "./typography";
import overrides from "./overrides";
import palette from "./palette";

export default createMuiTheme({
  typography,
  overrides,
  palette,
  breakpoints,
});
