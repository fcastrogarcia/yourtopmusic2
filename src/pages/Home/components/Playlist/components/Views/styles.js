import styled from "styled-components";
import Typography from "material/Typography";

const ViewWrapper = styled.div`
  width: 350px;
  height: 384px;
  background: var(--white);
  position: relative;
  transition: all 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95vw;
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

const ShareWrapper = styled(Wrapper)``;

const Message = styled(Typography).attrs({ variant: "h3" })`
  color: var(--gray-800);
  && {
    font-size: 21px;
    margin-top: 35px;
  }
`;

const PartyPopper = styled.img`
  width: 130px;
  height: 130px;
`;

export default {
  Cover,
  ViewWrapper,
  Message,
  Wrapper,
  PartyPopper,
  ShareWrapper,
};
