import styled from "styled-components";
// import { mediaBreaks } from "theme/devices";
import { FiHeadphones } from "react-icons/fi";

const LeftSidebar = styled.div`
  grid-area: sidebar-1;
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

const Logo = styled(FiHeadphones).attrs({
  size: 28,
})`
  color: var(--gray-800);
`;

export default { LeftSidebar, Logo };
