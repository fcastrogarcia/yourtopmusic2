import styled from "styled-components";
import BaseButton from "material/Button";
import mixins from "theme/mixins";
import { RiPlayListLine } from "react-icons/ri";
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
      border: 1px solid ${teal["A400"]};
    `}
    ${mediaBreaks.tablet`
      height: 40px;
      font-size: 15px;
      padding: 0;
    `}
  }
`;

const PlaylistIcon = styled(RiPlayListLine).attrs({
  size: "22px",
})``;

export default { Button, PlaylistIcon };
