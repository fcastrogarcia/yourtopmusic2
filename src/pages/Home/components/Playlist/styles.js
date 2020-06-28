import styled, { css } from "styled-components";
import Button from "material/Button";
import mixins from "theme/mixins";
import { mediaBreaks } from "theme/devices";
import Typography from "material/Typography";
import { MdClose } from "react-icons/md";
import { ScaleLoader } from "react-spinners";
import BaseRadioGroup from "material/RadioGroup";
import BaseFormControl from "material/FormControl";

const BaseButton = styled(Button)`
  && {
    border: 1px solid var(--gray-300);
    box-sizing: content-box;
    height: 36px;
    width: 100%;
    background: var(--white);
    transition: all 0.15s ease-in-out;
    letter-spacing: 0.5px;
    font-weight: 400;
    ${mixins.hoverButton`
      background: var(--gray-800);
      color: var(--white);
    `}
  }
`;

const OpenButton = styled(BaseButton)`
  && {
    ${mixins.hoverButton`
      border: 1px solid var(--gray-800);
      `}
    ${mediaBreaks.tablet`
      height: 40px;
      font-size: 15px;
      padding: 0;
      `}
  }
`;

const CreateButton = styled(BaseButton)`
  && {
    font-weight: 500;
    height: 36px;
    border: 2px solid var(--gray-800);
    ${mixins.hoverButton`
      background: var(--gray-800);
      color: var(--white);
      & div div {
        background: var(--white);
      }
    `}
  }
`;

const BaseWrapper = styled.div`
  background: var(--white);
  width: 350px;
  height: 384px;
  max-width: 95vw;
  position: relative;
  transition: all 0.15s ease-in-out;
`;

const Wrapper = styled(BaseWrapper)`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Top = styled.div`
  width: 100%;
`;

const Bottom = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  border-top: 1px solid var(--gray-300);
`;

const Close = styled(MdClose)`
  color: var(--gray-600);
  align-self: flex-end;
  transition: all 0.15s ease-in-out;
  ${mixins.hoverButton`
    color: var(--gray-800);
  `}
`;

const IconButton = styled(Button).attrs({ disableRipple: true })`
  && {
    height: min-content;
    width: min-content;
    min-width: initial;
    font-size: 22px;
    justify-self: flex-end;
    padding: 0;
    position: absolute;
    top: 18px;
    right: 13px;
    z-index: 3;

    ${mixins.hoverButton`
      background: initial;
    `}
  }
`;

const Title = styled(Typography).attrs({ variant: "h3" })`
  && {
    font-size: 18px;
    color: var(--gray-800);
    line-height: 32px;
    border-bottom: 1px solid var(--gray-300);
    padding: 16px;
  }
`;

const FormLabel = styled(Typography).attrs({ variant: "" })`
  && {
    font-size: 15px;
    color: var(--gray-500);
    width: 100%;
    padding-bottom: 8px;
  }
`;

const FormControl = styled(BaseFormControl).attrs({ component: "fieldset" })`
  && {
    width: 100%;
    padding: 16px 16px 0;
    box-sizing: border-box;
  }
`;

const RadioGroup = styled(BaseRadioGroup)`
  && {
    padding-top: 4px;
    display: grid;
    grid-gap: 6px;
  }
`;

const override = css`
  display: flex;
`;

const Loader = styled(ScaleLoader).attrs({
  height: 14,
  css: override,
  color: "#1a202c",
})``;

export default {
  OpenButton,
  Wrapper,
  CreateButton,
  Bottom,
  Top,
  Close,
  Title,
  IconButton,
  FormLabel,
  FormControl,
  RadioGroup,
  Loader,
};
