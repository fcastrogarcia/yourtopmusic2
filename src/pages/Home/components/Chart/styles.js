import styled from "styled-components";
import { mediaBreaks } from "theme/devices";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 20px 30px;

  ${mediaBreaks.mobile`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 12px 30px;
    grid-auto-rows: 105px;
  `}
`;

export default { Wrapper };
