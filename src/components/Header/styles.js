import styled from "styled-components";
import { mediaBreaks } from "theme/devices";
import { FiHeadphones } from "react-icons/fi";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-areas: "logo . user";
  box-sizing: border-box;
  border-bottom: 1px solid var(--gray-300);
  font-weight: bold;
  z-index: 598;
  padding: 0 24px;
  background: #fff;
  align-items: center;

  ${mediaBreaks.mobile`
    padding: 0 4.5%;
  `}
`;

const Logo = styled(FiHeadphones).attrs({
  size: 28,
})`
  color: var(--gray-800);
`;

export default { Header, Logo };
