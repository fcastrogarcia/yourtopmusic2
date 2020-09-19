import styled from "styled-components";
import HotBevarageImg from "assets/images/hot-bevarage.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-800);
`;

const Text = styled.p`
  font-family: "JetBrains";
  /* color: #f4e9d3; */
  color: #f5e9ca;
  letter-spacing: 0.5px;
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
