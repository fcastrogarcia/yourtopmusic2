import styled from "styled-components";
// import { mediaBreaks } from "theme/devices";
import { FiHeadphones } from "react-icons/fi";

const Sidebar2 = styled.div`
  grid-area: sidebar-2;
  z-index: 598;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30%;
  padding: 16px 32px;
  box-sizing: border-box;
`;

const Logo = styled(FiHeadphones).attrs({
  size: 28,
})`
  color: var(--gray-800);
`;

export default { Sidebar2, Logo };
