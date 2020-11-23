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
    min-height: 58px;
    ${mediaBreaks.tablet`
      min-height: 52px;
      padding: 0;
      margin: 
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
      && .MuiTabs-flexContainer {
        justify-content: space-evenly;
      }
    `}
  }
`;

export default { Tab, Tabs };
