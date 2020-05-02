import styled from "styled-components";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-areas: ". . user";
  position: sticky;
  box-sizing: border-box;
  border-bottom: 1px solid var(--gray-300);
  font-weight: bold;
  z-index: 598;
  top: 0;
  padding: 0 24px;
  background: #fff;
`;

export default { Header };
