import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import shadows from "theme/shadows";

const Main = styled.main`
  display: grid;
  width: min(90vw, 1280px);
  margin: 40px 0;
  grid-template-rows: auto auto;
  grid-gap: 30px;
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
  clip-path: inset(0px 1px -40px 1px);
  box-shadow: ${shadows.fuzzy};

  ${({ sticky }) =>
    sticky &&
    css`
      padding-top: 25px;
      grid-gap: 25px;
    `}
`;

const Title = styled(Typography).attrs({ variant: "h1" })`
  color: var(--gray-800);
  background: #fff;
  transition: all 0.15s;
  padding-left: 1px;
  && {
    line-height: 55px;
  }

  ${({ sticky }) =>
    sticky &&
    css`
      && {
        font-size: 22px;
        line-height: 32px;
      }
    `}
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid var(--gray-300); */
  background: #fff;
`;

export default { Main, Title, RowWrapper, Header };
