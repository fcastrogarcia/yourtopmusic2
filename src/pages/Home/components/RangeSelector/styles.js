import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BaseTabs from "@material-ui/core/Tabs";
import BaseTab from "@material-ui/core/Tab";

const Wrapper = styled(Grid).attrs({
  container: true,
  alignItems: "center",
})``;

const Tab = styled(BaseTab).attrs({
  disableRipple: false,
})`
  && {
    font-weight: 700;
    text-transform: none;
    color: var(--gray-900);
    letter-spacing: 0.8px;
    font-size: 14px;
    min-width: 100px;
    border-bottom: 2px solid var(--gray-300);
  }
`;

const Tabs = styled(BaseTabs)`
  && .MuiTabs-indicator {
    background-color: var(--teal-400);
    height: 3px;
  }
`;

const Line = styled.div`
  box-sizing: border-box;
  align-self: flex-end;
  flex: 1;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  min-height: 48px;
  margin: 11px 0;
  border: none;
  height: calc(100% - 22px);
  border-bottom: 2px solid var(--gray-300);
`;

export default { Wrapper, Tab, Tabs, Line };
