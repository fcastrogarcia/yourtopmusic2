import { css } from "styled-components";
import { devices } from "./devices";

const mixins = {
  staticStyles: (...args) => css`
    &,
    &:hover,
    &:active,
    &:focus {
      ${css(...args)}
    }
  `,
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerPositioned: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  `,
  removeButtonStyle: css`
    appearance: none;
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
  `,
  textEllipsis: (line) => css`
    display: inline-block; // for non Webkit browsers
    display: -webkit-box; // needed for the effect to cut off
    -webkit-line-clamp: ${line}; // line to cut off
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  hover: (...args) => css`
    ${devices.onlyDesktop} {
      &:hover {
        ${css(...args)}
      }
    }

    ${devices.tablet} {
      &:active {
        ${css(...args)}
      }
    }
  `,
  hoverButton: (...args) => css`
    @media (hover: hover) {
      &:hover {
        ${css(...args)}
      }
    }
    &:active {
      ${css(...args)}
    }
  `,
  placeholder: (...args) => css`
    ::-webkit-input-placeholder {
      ${css(...args)}
    }
    :-ms-input-placeholder {
      ${css(...args)}
    }
    ::-moz-placeholder {
      ${css(...args)}
    }
    :-moz-placeholder {
      ${css(...args)}
    }
    ::placeholder {
      ${css(...args)}
    }
  `,
};

export default mixins;
