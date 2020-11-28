import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import shadows from "theme/shadows";
import { mediaBreaks } from "theme/devices";

const Sidebar = styled.aside`
  grid-area: sidebar;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30%;
  padding: 40px 64px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 54px 0;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MainThread = styled.main`
  grid-area: main;
  display: grid;
  margin: 40px 0 110px;
  grid-template-rows: auto auto;
  grid-gap: 30px;

  ${mediaBreaks.tablet`
    width: min(93vw, 1280px);
    margin: 16px 0;
    grid-gap: 12px;
  `}
`;

const Header = styled.div`
  display: grid;
  position: sticky;
  top: 0;
  z-index: 30;
  grid-template-rows: auto auto;
  grid-gap: 30px;
  background: #fff;
  transition: all 0.15s;
  /* box-shadow: ${shadows.onlyBottom}; */

  ${mediaBreaks.tablet`
    grid-gap: 18px;
    padding-left: 6px;
  `}

  ${({ sticky }) =>
    sticky &&
    css`
      padding-top: 25px;
      grid-gap: 25px;
      ${mediaBreaks.mobile`
        padding-top: 0;
        grid-gap: 0;
      `}
    `}
`;

const Title = styled(Typography).attrs({ variant: "h1" })`
  color: var(--gray-800);
  background: #fff;
  transition: all 0.15s;
  padding-left: 1px;

  && {
    line-height: 55px;
    ${mediaBreaks.tablet`
      font-size: 25px;
    `}
  }

  ${({ sticky }) =>
    sticky &&
    css`
      && {
        font-size: 22px;
        line-height: 32px;
        ${mediaBreaks.mobile`
          display: none;
        `}
      }
    `}
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 162px 162px;
  grid-gap: 12px;
  align-items: center;
  background: #fff;
  border-top: 1px solid var(--gray-200);
  ${mediaBreaks.tablet`
    grid-template-columns: 1fr 1fr;
    padding: 8px 0;
  `}
`;

const BottomWrapper = styled.div`
  ${mediaBreaks.tablet`
    position: fixed;
    transition: all 0.2s ease-in-out;
    bottom: ${({ isAtBottom }) => (isAtBottom ? 0 : -80)}px;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: ${shadows.onlyTop};
  `}
  background: var(--white);
`;

export default {
  MainThread,
  Title,
  Controls,
  Header,
  BottomWrapper,
  Sidebar,
  Wrapper,
};
