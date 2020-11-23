import styled from "styled-components";
import { mediaBreaks } from "theme/devices";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  grid-template-areas: "sidebar-1 main-thread sidebar-2";
  /* ${mediaBreaks.mobile`
    grid-template-rows: 3.5em auto 9em;
  `} */
`;

export default { Layout };
