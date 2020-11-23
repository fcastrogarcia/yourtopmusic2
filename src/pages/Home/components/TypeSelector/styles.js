import styled from "styled-components";
import BaseSelect from "react-select";
import { withTheme } from "material";
import { mediaBreaks } from "theme/devices";
import teal from "material/colors/teal";
import shadows from "theme/shadows";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  ${mediaBreaks.tablet`
  `}
`;

const Select = withTheme(styled(BaseSelect).attrs({
  className: "react-select-container",
  classNamePrefix: "react-select",
})`
  width: 100%;
  max-width: 200px;

  ${mediaBreaks.tablet`
    width: 100%;
  `}

  .react-select {
    font-family: "Rubik", sans-serif;
    &__control {
      padding: 12px 20px 12px 25px;
      transition: all 0.2s ease-in-out;
      border-color: var(--gray-300);
      height: 55px;
      border-radius: 30px;
      border: none;
      background: var(--gray-100);
      cursor: pointer;
      box-shadow: none;

      &:hover {
        background: var(--gray-200);
        border: none;
      }
      &--is-focused {
      }
      ${mediaBreaks.tablet`
        padding: 9px 5px 9px 10px;
        `}
      &--menu-is-open {
        background: var(--gray-200);
      }
    }
    &__menu {
      top: 64px;
      box-shadow: ${shadows.lg};
      border-radius: 8px;
      &-list {
        border-radius: 8px;
      }
    }
    &__indicator-separator {
      display: none;
    }
    &__dropdown-indicator {
      padding-left: 5px;
    }
    &__single-value {
      color: var(--gray-700);
      font-size: 18px;
      font-weight: 500;
    }
    /* &__menu {
      box-shadow: ${shadows.lg};
    } */
    &__option {
      cursor: pointer;
      font-size: 15px;
      padding: 16px;
      background: none;
      color: var(--gray-700);

      ${mediaBreaks.tablet`
        padding: 15px;
        font-size: 14px;
        letter-spacing: 0.5px;
      `}
      &--is-focused {
        background: var(--gray-100);
        color: var(--gray-800);
      }
      &--is-selected {
        background: var(--gray-200);
        color: var(--gray-800);
      }
      &:active {
        background: initial;
      }
    }
  }
`);

export default { Wrapper, Select };
