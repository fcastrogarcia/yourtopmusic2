import styled from "styled-components";
import Typography from "material/Typography";
import Grid from "material/Grid";
import BaseTabs from "material/Tabs";
import BaseTab from "material/Tab";
import teal from "material/colors/teal";

const Tab = styled(BaseTab).attrs({
  disableRipple: false,
})`
  && {
    font-weight: 700;
    text-transform: none;
    color: var(--gray-800);
    letter-spacing: 0.8px;
    font-size: 14px;
    width: 20vw;
    min-width: 100px;
    max-width: 125px;
    opacity: 0.5;
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
`;

const LeftContainer = styled(Grid)``;

export default { Tab, Tabs, LeftContainer };
