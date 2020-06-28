import styled from "styled-components";
import BaseSelect from "react-select";
import { withTheme } from "material";
import { mediaBreaks } from "theme/devices";
import teal from "material/colors/teal";
import shadows from "theme/shadows";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${mediaBreaks.tablet`
  `}
`;

const Select = withTheme(styled(BaseSelect).attrs({
  className: "react-select-container",
  classNamePrefix: "react-select",
})`
  width: 100%;
  ${mediaBreaks.tablet`
    width: 100%;
  `}

  .react-select {
    font-family: "Rubik", sans-serif;
    &__control {
      padding: 8px 5px 8px 10px;
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
      ${mediaBreaks.tablet`
        padding: 9px 5px 9px 10px;
      `}
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
