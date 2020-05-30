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
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 60vh;
`;

const Title = styled.h1`
  font-weight: 500;
  color: var(--gray-900);
  text-align: center;
  padding: 0 20px;
  ${mediaBreaks.mobile`
    font-size: 28px;
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
    font-size: 20px;
    font-weight: 500;
    color: var(--gray-900);
    width: 310px;
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

export default {
  Button,
  Layout,
  Icon,
  Loader,
  Title,
  Wrapper,
};
