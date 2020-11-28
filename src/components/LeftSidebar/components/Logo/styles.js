import styled from "styled-components";
import Button from "material/IconButton";
import HeadphonesImg from "assets/images/headphones.webp";

const IconButton = styled(Button)``;

const Headphones = styled.img.attrs({ src: HeadphonesImg })`
  width: 32px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default { IconButton, Headphones, Container };
