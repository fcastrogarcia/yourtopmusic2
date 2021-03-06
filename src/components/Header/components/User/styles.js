import styled, { css } from "styled-components";
import Typography from "material/Typography";
import BaseSkeleton from "@material-ui/lab/Skeleton";
import { mediaBreaks } from "theme/devices";
import shadows from "theme/shadows";

const openStyles = css`
  background: var(--gray-200);
  .avatar-button {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const User = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  border-radius: 30px;
  width: min-content;
  padding-left: 12px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  ${({ open }) => open && openStyles};
  &:hover {
    ${openStyles}
  }

  ${mediaBreaks.tablet`
    padding-left: 0;
  `}
`;

const Skeleton = styled(BaseSkeleton).attrs({
  variant: "text",
  width: 120,
  height: 15,
})`
  && {
    margin-right: 10px;
  }
  ${mediaBreaks.tablet`
    && {
      display: none;
    }
  `}
`;

const DisplayName = styled(Typography).attrs({
  variant: "subtitle1",
})`
  && {
    padding-right: 10px;
    color: var(--gray-800);
  }
`;

const Menu = styled.ul`
  width: 175px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${shadows.lg};
  position: absolute;
  top: -133px;
  z-index: 10000;
  background: white;

  ${mediaBreaks.tablet`
    top: 58px;
    right: 0;
  `}
`;

const MenuItem = styled.li`
  cursor: pointer;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  padding-left: 25px;
  font-size: 15px;
  color: var(--gray-700);
  transition: 0.2s background ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-200);
  }
  &:hover {
    background: var(--gray-200);
  }
`;

export default {
  User,
  DisplayName,
  Skeleton,
  Menu,
  MenuItem,
  Wrapper,
};
