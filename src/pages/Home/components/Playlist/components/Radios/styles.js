import styled, { css } from "styled-components";
import BaseRadio from "material/Radio";
import BaseFormControlLabel from "material/FormControlLabel";
import mixins from "theme/mixins";
import teal from "material/colors/teal";

const FormControlLabel = styled(BaseFormControlLabel).attrs({
  classes: {
    label: "control-label",
  },
})`
  && {
    margin-left: initial;
    margin-right: initial;
    height: 72px;
    transition: all 0.1s ease-in-out;
    border-bottom: 2px solid var(--white);
    padding: 0 4px;
    /* max-width: 245px; */
    ${mixins.hoverButton`
        background: #F4FCFA;
    `}
    ${({ selected }) =>
      selected &&
      css`
        border-bottom: 2px solid ${teal["A400"]};
        background: #f4fcfa;
      `}
      .control-label {
      font-size: 17px;
      font-weight: 400;
      letter-spacing: 0.5px;
      color: var(--gray-800);
      padding-left: 14px;
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

export default { Radio, FormControlLabel };
