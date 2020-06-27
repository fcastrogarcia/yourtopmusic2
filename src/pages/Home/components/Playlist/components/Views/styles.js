import styled, { css } from "styled-components";
import teal from "material/colors/teal";
import { BsCheckCircle as BaseCheck } from "react-icons/bs";
import Typography from "material/Typography";
import { mediaBreaks } from "theme/devices";

const ViewWrapper = styled.div`
  width: 350px;
  height: 384px;
  background: var(--white);
  position: relative;
  transition: all 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ successView }) => successView && css``}
`;

const Check = styled(BaseCheck).attrs({ size: 72 })`
  color: ${teal["A700"]};
`;

const Cover = styled.img`
  width: 200px;
  border-radius: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled(Typography).attrs({ variant: "h3" })`
  color: var(--gray-800);
  && {
    font-size: 17px;
    margin-top: 12px;
  }
`;

export default {
  Cover,
  ViewWrapper,
  Check,
  Message,
  Wrapper,
};
