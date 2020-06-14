import styled from "styled-components";
import BaseButton from "material/Button";
import mixins from "theme/mixins";
import { mediaBreaks } from "theme/devices";
import teal from "material/colors/teal";

const Button = styled(BaseButton)`
  && {
    border: 1px solid var(--gray-300);
    border-radius: 4px;
    box-sizing: content-box;
    height: 36px;
    background: var(--white);
    transition: all 0.15s ease-in-out;
    min-width: initial;
    padding: 0 12px;
    text-transform: initial;
    letter-spacing: 0.3px;
    font-weight: 400;
    ${mixins.hoverButton`
      border: 1px solid var(--gray-800);
      background: var(--gray-800);
      color: var(--white);
    `}
    ${mediaBreaks.tablet`
      height: 40px;
      font-size: 15px;
      padding: 0;
    `}
  }
`;

const Wrapper = styled.div`
  background: var(--white);
  height: 450px;
  width: 400px;
`;

export default { Button, Wrapper };
