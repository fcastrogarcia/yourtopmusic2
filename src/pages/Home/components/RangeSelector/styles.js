import styled from "styled-components";
import Grid from "material/Grid";
import BaseTabs from "material/Tabs";
import BaseTab from "material/Tab";
import teal from "material/colors/teal";
import { mediaBreaks } from "theme/devices";
import shadows from "theme/shadows";

const Tab = styled(BaseTab).attrs({
  disableRipple: false,
})`
  && {
    text-transform: none;
    color: var(--gray-900);
    letter-spacing: 0.5px;
    font-size: 14px;
    width: 20vw;
    min-width: 100px;
    max-width: 125px;
    opacity: 0.35;
    ${mediaBreaks.tablet`
      min-height: 52px;
    `}
  }
  & .Mui-selected {
    color: var(--gray-100);
  }
`;

const Tabs = styled(BaseTabs)`
  & .MuiTabs-indicator {
    background-color: ${teal["A400"]};
    height: 3px;
  }
  && {
    background: var(--white);
    ${mediaBreaks.tablet`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 15000;
      box-shadow: ${shadows.onlyTop};
      && .MuiTabs-flexContainer {
        justify-content: center;
      }
    `}
  }
`;

const LeftContainer = styled(Grid)``;

export default { Tab, Tabs, LeftContainer };
