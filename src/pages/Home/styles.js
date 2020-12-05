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
  margin: 40px 0 100px;
  grid-template-rows: auto auto;
  grid-gap: 30px;

  ${mediaBreaks.tablet`
    width: min(93vw, 1280px);
    margin: 16px 0 100px;
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
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: 0 15px;
  background: #fff;
  width: 100%;
  position: sticky;
  top: ${({ isScrollUp }) => (isScrollUp ? 0 : "-75px")};
  transition: all 0.25s ease-in-out;
  z-index: 1000;
  padding: 10px 15px;
  box-shadow: ${shadows.fuzzy};
  border-radius: 0 0 40px 40px;
  box-sizing: border-box;
  clip-path: inset(0px -1px -25px -1px);
`;

const BottomWrapper = styled.div`
  ${mediaBreaks.tablet`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    transition: all 0.2s ease-in-out;
    // bottom: ${({ isAtBottom }) => (isAtBottom ? 0 : -80)}px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: ${shadows.onlyBottom};
  `}
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
