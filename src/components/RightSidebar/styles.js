import styled from "styled-components";
// import { mediaBreaks } from "theme/devices";
import { FiHeadphones } from "react-icons/fi";

const RightSidebar = styled.div`
  grid-area: sidebar-1;
  z-index: 598;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 30%;
  padding: 20px 54px;
  box-sizing: border-box;
  justify-content: flex-end;
  display: flex;
  align-items: flex-end;
`;

const Logo = styled(FiHeadphones).attrs({
  size: 28,
})`
  color: var(--gray-800);
`;

export default { RightSidebar, Logo };
