import styled, { css } from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

const SelectButton = styled.button`
  padding: 12px 20px 12px 25px;
  transition: all 0.2s ease-in-out;
  border-color: var(--gray-300);
  height: 55px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gray-200);
  color: var(--gray-700);
  font-size: 18px;
  font-weight: 500;
  max-width: 300px;

  &:hover {
    background: var(--gray-300);
  }
`;

const Dropwdown = styled(MdKeyboardArrowDown).attrs({
  size: 24,
  color: css`var(--gray-500)`,
})``;

const Wrapper = styled.div`
  height: 20vh;
  min-height: 175px;
  background: var(--white);
  display: grid;
  grid-template-rows: 35px 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  border-radius: 50px;
`;

const Selector = styled.div`
  position: relative;
  width: 60vw;
  min-width: 220px;
  max-width: 400px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  border-radius: 50px;
  height: 50px;
  margin-bottom: 1vh;

  &::after {
    content: "";
    position: absolute;
    background: var(--gray-300);
    border-radius: 50px;
    height: 56px;
    width: 50%;
    transition: all 0.15s ease-in-out;
    top: -3px;
    left: ${({ index }) => (!index ? 0 : 50)}%;
  }
`;

const Option = styled.button`
  font-size: 17px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? "var(--gray-800)" : "var(--gray-600)")};
  position: relative;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

const CloseBar = styled.button`
  width: 60px;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 50px;
    background: var(--gray-500);
    left: calc(50% - 30px);
  }
`;

export default { SelectButton, Wrapper, Dropwdown, Selector, Option, CloseBar };
