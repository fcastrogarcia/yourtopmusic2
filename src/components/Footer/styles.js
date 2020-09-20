import styled from "styled-components";
import HotBevarageImg from "assets/images/hot-bevarage.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: "JetBrains";
  color: var(--gray-800);
  letter-spacing: 0.6px;
  font-size: 15px;
`;

const HotBevarage = styled.img.attrs({ src: HotBevarageImg })`
  width: 40px;
  height: auto;
  position: relative;
  top: 9px;
`;

const Link = styled.a`
  text-decoration: underline;
`;

export default { Container, Text, HotBevarage, Link };
