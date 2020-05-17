import styled from "styled-components";
import { mediaBreaks } from "theme/devices";

const Layout = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 4em auto 4em;

  ${mediaBreaks.mobile`
    grid-template-rows: 3.5em auto 4em;
  `}
`;

export default { Layout };
