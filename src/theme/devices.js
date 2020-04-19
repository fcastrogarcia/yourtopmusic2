import { css } from "styled-components";

export const breakpoints = {
  values: {
    xs: 320,
    sm: 600,
    md: 1024,
    lg: 1280,
    xl: 149,
  },
};

const getMin = (key) =>
  `@media screen and (min-width: ${breakpoints.values[key]}px)`;
const getMax = (key) =>
  `@media screen and (max-width: ${breakpoints.values[key] - 1}px)`;

export const devices = {
  mobile: getMax("sm"),
  tablet: getMax("md"),
  tabletLg: getMax("lg"),
  onlyDesktop: getMin("lg"),
  desktopSm: getMax("xl"),
  desktopLg: getMin("xl"),
};

export const mediaBreaks = {
  mobile: (...args) => css`
    ${devices.mobile} {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    ${devices.tablet} {
      ${css(...args)}
    }
  `,
  tabletLg: (...args) => css`
    ${devices.tabletLg} {
      ${css(...args)}
    }
  `,
  onlyDesktop: (...args) => css`
    ${devices.onlyDesktop} {
      ${css(...args)}
    }
  `,
  desktopSm: (...args) => css`
    ${devices.desktopSm} {
      ${css(...args)}
    }
  `,
  desktopLg: (...args) => css`
    ${devices.desktopLg} {
      ${css(...args)}
    }
  `,
};
