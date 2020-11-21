import styled from "styled-components";
import Typography from "material/Typography";
import partyPopperImg from "assets/images/party_popper.png";
import { mediaBreaks } from "theme/devices";

const ViewWrapper = styled.div`
  width: 550px;
  height: 540px;
  background: var(--white);
  position: relative;
  transition: all 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95vw;
  ${mediaBreaks.tablet`
    height: 520px;
  `}
`;

const Cover = styled.img`
  width: 320px;
  border-radius: 4px;
  ${mediaBreaks.tablet`
      width: 290px;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShareWrapper = styled(Wrapper)``;

const Message = styled(Typography).attrs({ variant: "h3" })`
  color: var(--gray-800);
  && {
    font-size: 24px;
    margin-top: 38px;
  }
`;

const PartyPopper = styled.img.attrs({ src: partyPopperImg })`
  width: 180px;
`;

export default {
  Cover,
  ViewWrapper,
  Message,
  Wrapper,
  PartyPopper,
  ShareWrapper,
};
