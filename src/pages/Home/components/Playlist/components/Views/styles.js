import styled, { css } from "styled-components";
import teal from "material/colors/teal";
import { BsCheckCircle as BaseCheck } from "react-icons/bs";

const ViewWrapper = styled.div`
  background: var(--white);
  width: 350px;
  height: 376px;
  position: relative;
  transition: all 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 470px;
  width: 450px;
  ${({ successView }) =>
    successView &&
    css`
      width: 350px;
      height: 376px;
    `}
`;

const Check = styled(BaseCheck).attrs({ size: 72 })`
  color: ${teal["A700"]};
`;

const Cover = styled.img`
  height: 250;
  width: 250px;
  border-radius: 4px;
`;

export default {
  Cover,
  ViewWrapper,
  Check,
};
