import styled from "styled-components";
import Typography from "material/Typography";
import BaseMenuItem from "material/MenuItem";
import BaseMenu from "material/Menu";
import { withTheme } from "material";
import { mediaBreaks } from "theme/devices";

const User = styled.div`
  grid-area: user;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const DisplayName = styled(Typography).attrs({
  variant: "subtitle1",
})`
  && {
    padding-right: 10px;
    color: var(--gray-800);
  }
  ${mediaBreaks.mobile`
    display: none;
  `}
`;

const MenuItem = styled(BaseMenuItem)``;

const ItemText = styled(Typography).attrs({
  variant: "subtitle1",
})`
  && {
    color: var(--gray-800);
    font-weight: 400;
    font-size: 16px;
  }
`;

const Menu = withTheme(
  styled(BaseMenu).attrs({
    anchorOrigin: { vertical: "top", horizontal: "right" },
    transformOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  })`
    && .MuiMenu-paper {
      top: 44px !important;
    }
  `
);

export default {
  User,
  DisplayName,
  Menu,
  MenuItem,
  ItemText,
};
