import styled from "styled-components";
import BaseSwitch from "material/Switch";
import teal from "material/colors/teal";

const Wrapper = styled.div`
  padding-right: 12px;
  display: flex;
  align-items: center;
  padding-bottom: 6px;
`;

const Switch = styled(BaseSwitch)`
  & .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track,
  .Mui-checked .MuiSwitch-thumb {
    background: ${teal["A400"]};
  }
`;

const Emoji = styled.span`
  padding: 0 10px;
  font-size: 22px;
  cursor: default;
`;

export default { Switch, Wrapper, Emoji };
