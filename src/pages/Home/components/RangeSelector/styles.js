import styled from "styled-components";
import BaseTabs from "material/Tabs";
import BaseTab from "material/Tab";
import teal from "material/colors/teal";
import { mediaBreaks } from "theme/devices";
// import shadows from "theme/shadows";

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

const Wrapper = styled.ul`
  width: 200px;
  border-radius: 22px;
  background: var(--gray-100);
  overflow: hidden;
`;

const RangeOption = styled.li`
  cursor: pointer;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  padding-left: 25px;
  font-size: 15px;
  color: var(--gray-700);
  font-weight: ${({ selected }) => selected && 500};
  background: ${({ selected }) => selected && `var(--gray-300)`};
  transition: 0.2s background ease-in-out;
  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-200);
  }
  &:hover {
    background: var(--gray-200);
  }
`;

export default { Tab, Tabs, Wrapper, RangeOption };
