import styled, { css } from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";
import shadows from "theme/shadows";
import teal from "material/colors/teal";
import ButtonBase from "material/ButtonBase";

const Icon = css`
  color: ${teal["A700"]};
  position: relative;
  font-size: 11px;
`;

const Play = styled(FaPlay)`
  ${Icon}
`;

const Pause = styled(FaPause)`
  ${Icon}
`;

const Player = styled(ButtonBase)`
  && {
    justify-self: flex-end;
    align-self: flex-end;
    margin: 0 12px 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    background: #fff;
    box-shadow: ${shadows.lg};
    transition: all 0.15s ease-in-out;

    position: absolute;
    right: -27px;
    top: 30px;

    ${({ active }) =>
      active
        ? css`
            &:hover {
              background: ${teal["A700"]};
            }
            &:hover ${Play}, &:hover ${Pause} {
              color: var(--white);
            }
          `
        : css`
            && ${Play} {
              opacity: 0.4;
            }
          `}
  }
`;

export default { Player, Play, Pause };
