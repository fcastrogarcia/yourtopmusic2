import styled from "styled-components";
import Typography from "material/Typography";
import Button from "material/IconButton";
import BaseMenuItem from "material/MenuItem";
import BaseMenu from "material/Menu";
import { withTheme } from "material";

const User = styled.div`
  grid-area: user;
  display: grid;
  grid-template-columns: auto 48px;
  gap: 0 12px;
  justify-items: center;
  align-items: center;
`;

const IconButton = styled(Button)`
  && {
    padding: 8px;
  }
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: var(--shadow);
`;

const DisplayName = styled(Typography).attrs({
  variant: "subtitle1",
})`
  color: var(--gray-800);
`;

const MenuItem = styled(BaseMenuItem)``;

const ItemText = styled(Typography).attrs({
  variant: "subtitle1",
})`
  color: var(--gray-700);
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
  Image,
  DisplayName,
  IconButton,
  Menu,
  MenuItem,
  ItemText,
};
