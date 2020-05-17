import styled from "styled-components";
import { mediaBreaks } from "theme/devices";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-areas: ". . user";
  box-sizing: border-box;
  border-bottom: 1px solid var(--gray-300);
  font-weight: bold;
  z-index: 598;
  padding: 0 24px;
  background: #fff;
  ${mediaBreaks.mobile`
    padding: 0 12px;
  `}
`;

export default { Header };
