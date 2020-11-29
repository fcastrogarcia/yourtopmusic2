import styled from "styled-components";
import { mediaBreaks } from "theme/devices";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  grid-template-areas: "header main sidebar";
  ${mediaBreaks.mobile`
    grid-template-columns: 1fr;
    grid-template-areas:
        "header"
        "controls"
        "main";
    justify-items: center;
  `}
`;

export default { Layout };
