import styled from "styled-components";
import BaseSwitch from "material/Switch";
import BaseSelect from "react-select";
import { withTheme } from "material";
import { mediaBreaks } from "theme/devices";
import teal from "material/colors/teal";
import shadows from "theme/shadows";

const Wrapper = styled.div`
  padding-right: 12px;
  display: flex;
  align-items: center;
  ${mediaBreaks.tablet`
    padding: 10px 12px 10px 0;
  `}
`;

const Select = withTheme(styled(BaseSelect).attrs({
  className: "react-select-container",
  classNamePrefix: "react-select",
})`
  width: 160px;

  .react-select {
    font-family: "Rubik", sans-serif;
    &__control {
      padding: 7px 5px 7px 10px;
      transition: all 0.15s;
      border-color: var(--gray-300);
      cursor: pointer;  
      &:hover {
        border-color: ${teal["A400"]};
      }
      &--is-focused {
        border-color: ${teal["A400"]};
        box-shadow: 0 0 0 1px ${teal["A400"]};
      }
    }
    &__indicator-separator {
      background-color: var(--gray-300);
    }
    &__dropdown-indicator {
      padding-left: 5px;
    }
    &__single-value {
      color: var(--gray-900);
      letter-spacing: 0.5px;
      font-size: 15px;
      font-weight: 400;
    }
    /* &__menu {
      box-shadow: ${shadows.lg};
    } */
    &__option {
      cursor: pointer;  
      font-size: 13px;
      padding: 10px;
      ${mediaBreaks.tablet`
        padding: 15px;
        font-size: 14px;
        letter-spacing: 0.5px;
      `}
      color: var(--gray-700);
      &--is-focused {
        background: var(--gray-100);
        color: var(--gray-800);
      }
      &--is-selected{
        background: ${teal["A400"]};
        color: var(--gray-800);
      }
      &:active {
        background: initial;
      }
    }
  }
`);

export default { Wrapper, Select };
