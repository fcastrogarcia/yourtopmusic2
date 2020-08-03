import styled, { css } from "styled-components";
import BaseButton from "material/Button";
import mixins from "theme/mixins";
import { RiSpotifyLine } from "react-icons/ri";
import { ScaleLoader } from "react-spinners";
import { mediaBreaks } from "theme/devices";

const beige = "#fdfaf5";

const Layout = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  ${mixins.flexCenter}
  background: ${beige};
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 90vw;
`;

const Title = styled.h1`
  font-weight: 500;
  color: var(--gray-900);
  text-align: center;
  padding: 0 20px;
  font-size: 26px;
  ${mediaBreaks.mobile`
    font-size: 25px;
    `}
`;

const override = css`
  display: flex;
`;

const Loader = styled(ScaleLoader).attrs({
  height: 20,
  css: override,
  color: "#1a202c",
})``;

const Button = styled(BaseButton)`
  && {
    font-family: "Rubik", sans-serif;
    border: 2px solid var(--gray-900);
    text-transform: none;
    height: 60px;
    font-weight: 500;
    font-size: 20px;
    color: var(--gray-900);
    width: 310px;
    max-width: 88%;
    ${mixins.hoverButton`
      background: var(--gray-900);
      color: ${beige};
      box-shadow: var(--shadow);
      & div div {
        background: ${beige};
      }
    `}
    ${mediaBreaks.mobile`
      width: 290px;
      font-size: 17px;
      height: 55px;
    `}
  }
`;

const Icon = styled(RiSpotifyLine).attrs({ size: 27 })`
  margin-right: 12px;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 60vh;
  border: 2px solid var(--gray-900);
  background: ${beige};
  padding: 15px 35px;
  ${mediaBreaks.mobile`
    padding: 0;
  `}
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--gray-900);
    top: 10px;
    right: -10px;
    height: 100%;
    width: 100%;
  }
`;

export default {
  Button,
  Layout,
  Icon,
  Loader,
  Title,
  Wrapper,
  Container,
};
