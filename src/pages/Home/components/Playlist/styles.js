import styled, { css } from "styled-components";
import Button from "material/Button";
import mixins from "theme/mixins";
import { mediaBreaks } from "theme/devices";
import teal from "material/colors/teal";
import Typography from "material/Typography";
import { MdClose } from "react-icons/md";
import { ScaleLoader } from "react-spinners";

import BaseRadio from "material/Radio";
import BaseRadioGroup from "material/RadioGroup";
import BaseFormControlLabel from "material/FormControlLabel";
import BaseFormControl from "material/FormControl";

const BaseButton = styled(Button)`
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
    padding: 0 24px;
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
  height: 376px;
  position: relative;
  transition: all 0.15s ease-in-out;
`;

const Wrapper = styled(BaseWrapper)`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Top = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-auto-rows: min-content;
  grid-gap: 16px;
  grid-template-areas:
    "title close"
    "range range";
  align-items: center;
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
    top: 16px;
    right: 16px;
    z-index: 3;

    ${mixins.hoverButton`
      background: initial;
    `}
  }
`;

const Title = styled(Typography).attrs({ variant: "h3" })`
  && {
    font-size: 18px;
    grid-area: title;
    color: var(--gray-800);
    line-height: 32px;
  }
`;

const FormLabel = styled(Typography).attrs({ variant: "" })`
  && {
    font-size: 15px;
    color: var(--gray-500);
    border-bottom: 1px solid var(--gray-300);
    width: 100%;
    padding-bottom: 8px;
  }
`;

const FormControl = styled(BaseFormControl)`
  && {
    grid-area: range;
  }
`;

const FormControlLabel = styled(BaseFormControlLabel).attrs({
  classes: {
    label: "control-label",
  },
})`
  && {
    margin-left: initial;
    margin-right: initial;
    height: 52px;
    border-radius: 32px;
    transition: all 0.1s ease-in-out;
    border: 2px solid var(--white);
    padding: 0 4px;
    max-width: 245px;
    ${mixins.hoverButton`
        background: #F4FCFA;
      `}
    ${({ selected }) =>
      selected &&
      css`
        border: 2px solid ${teal["A400"]};
        background: #f4fcfa;
      `}
    .control-label {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.5px;
      color: var(--gray-800);
      padding-left: 8px;
    }
  }
`;
const Radio = styled(BaseRadio).attrs({
  classes: {
    checked: "radio-checked",
  },
})`
  && {
    color: var(--gray-500);
  }
  &&.radio-checked {
    color: ${teal["A400"]};
  }
`;

const RadioGroup = styled(BaseRadioGroup)`
  && {
    padding-top: 16px;
    display: grid;
    grid-gap: 6px;
  }
`;

const override = css`
  display: flex;
`;

const Loader = styled(ScaleLoader).attrs({
  height: 16,
  css: override,
  color: "#1a202c",
})``;

const Cover = styled.img`
  height: 250;
  width: 250px;
  border-radius: 4px;
`;

const ViewWrapper = styled(BaseWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 470px;
  width: 450px;
`;

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
  FormControlLabel,
  Radio,
  RadioGroup,
  Loader,
  Cover,
  ViewWrapper,
};
