import styled from "styled-components";
import { mediaBreaks } from "theme/devices";
import HotBevarageImg from "assets/images/hot-bevarage.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaBreaks.tablet`
    height: 80px;
    background: var(--gray-800);
  `}
`;

const Text = styled.p`
  font-family: "JetBrains";
  color: var(--gray-800);
  letter-spacing: 0.6px;
  font-size: 15px;
  ${mediaBreaks.tablet`
    line-height: 80px;
    font-size: 14px;
    color: #F6F0DF;
  `}
`;

const HotBevarage = styled.img.attrs({ src: HotBevarageImg })`
  width: 40px;
  height: auto;
  position: relative;
  top: 10px;
  ${mediaBreaks.tablet`
    width: 35px;
  `}
`;

const Link = styled.a`
  text-decoration: underline;
`;

export default { Container, Text, HotBevarage, Link };
