import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import shadows from "theme/shadows";
import { mediaBreaks } from "theme/devices";

const Main = styled.main`
  display: grid;
  width: min(90vw, 1280px);
  margin: 40px 0;
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
  box-shadow: ${shadows.onlyBottom};

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

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-top: 1px solid var(--gray-200);
`;

export default { Main, Title, RowWrapper, Header };
