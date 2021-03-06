import styled from "styled-components";
import shadows from "theme/shadows";

const getPseudoElPosition = ({ tab }) => {
  switch (tab) {
    case 0:
    default:
      return "7px";
    case 1:
      return "34%";
    case 2:
      return "67%";
  }
};

const WrapperDesktop = styled.ul`
  width: 200px;
  border-radius: 0;
  overflow: hidden;
`;

const RangeOption = styled.li`
  cursor: pointer;
  position: relative;
  height: 28px;
  display: flex;
  margin: 10px 0;
  align-items: center;
  padding: 10px 10px;
  padding-left: 25px;
  border-radius: 50px;
  font-size: 15px;
  color: var(--gray-700);
  font-weight: ${({ selected }) => selected && 500};
  background: ${({ selected }) => selected && `var(--gray-200)`};
  transition: 0.15s background ease-in-out;
  &:hover {
    background: ${({ selected }) => (selected ? `var(--gray-300)` : "var(--gray-100)")};
  }
`;

const WrapperMobile = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 15px;
  height: 50px;
  box-shadow: ${shadows.xl};
  border-radius: 50px;
  background: var(--gray-900);
  width: 92vw;
  max-width: 600px;

  &::after {
    position: absolute;
    content: "";
    width: calc(33% - 7px);
    background: var(--gray-800);
    border-radius: 50px;
    transition: all 0.2s ease-in-out;
    height: 38px;
    left: ${getPseudoElPosition};
    box-shadow: ${shadows.md};
  }
`;

const RangeOptionMobile = styled.li`
  font-size: 13px;
  letter-spacing: 0.3px;
  color: var(--white);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  z-index: 1500;
  padding: 0 7px;
`;

export default { WrapperDesktop, RangeOption, WrapperMobile, RangeOptionMobile };
