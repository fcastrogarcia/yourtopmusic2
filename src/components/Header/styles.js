import styled from "styled-components";
// import { mediaBreaks } from "theme/devices";

const Header = styled.header`
  grid-area: header;
  z-index: 598;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 30%;
  padding: 40px 64px 20px;
  box-sizing: border-box;
  justify-content: flex-end;
  display: grid;
  align-items: flex-end;
  grid-template-rows: 50px 1fr 60px;
  grid-gap: 54px 0;
`;

const HeaderMobile = styled.header`
  height: 5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  box-sizing: border-box;
`;

export default { Header, HeaderMobile };
