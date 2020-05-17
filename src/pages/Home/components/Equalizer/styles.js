import styled, { keyframes } from "styled-components";

const sound = keyframes`
  0% {
    transform: scaleY(1.5)
  }
  10% {
    transform: scaleY(0.7)
  }
  20% {
    transform: scaleY(1)
  }
  30% {
    transform: scaleY(0.6)
  }
  40% {
    transform: scaleY(0.8)
  }
  50% {
    transform: scaleY(1.5)
  }
  60% {
    transform: scaleY(0.8)
  }
  70% {
    transform: scaleY(1)
  }
  80% {
    transform: scaleY(0.5)
  }
  90% {
    transform: scaleY(1.5)
  }
  100% {
    transform: scaleY(1)
}
`;

const Container = styled.div`
  display: flex;
  z-index: 1;
`;

const Bar = styled.li`
  position: absolute;
  left: 0;
  right: 0;
  height: 12px;
  background: var(--gray-400);
  border-radius: 5px;
`;

const Column = styled.ol`
  width: 2px;
  margin-right: 2px;
  border-radius: 4px;
  padding: 0;
  height: 12px;
  position: relative;
  list-style-type: none;

  &:nth-child(1) ${Bar} {
    animation: ${sound} 1.5s 0.1s ease-in-out alternate infinite;
  }
  &:nth-child(2) ${Bar} {
    animation: ${sound} 1.5s 0.25s ease-in-out alternate infinite;
  }
  &:nth-child(3) ${Bar} {
    animation: ${sound} 1.5s 0s ease-in-out alternate infinite;
  }
  &:nth-child(4) ${Bar} {
    animation: ${sound} 1.5s 0.15s ease-in-out alternate infinite;
  }
  &:nth-child(5) ${Bar} {
    animation: ${sound} 1.5s 0.2s ease-in-out alternate infinite;
  }
  &:nth-child(6) ${Bar} {
    animation: ${sound} 1.5s 0.1s ease-in-out alternate infinite;
  }
  &:nth-child(7) ${Bar} {
    animation: ${sound} 1.5s 0.05s ease-in-out alternate infinite;
  }
  &:nth-child(8) ${Bar} {
    animation: ${sound} 1.5s 0.1s ease-in-out alternate infinite;
  }
  &:nth-child(9) ${Bar} {
    animation: ${sound} 1.5s 0.25s ease-in-out alternate infinite;
  }
  &:nth-child(10) ${Bar} {
    animation: ${sound} 1.5s 0s ease-in-out alternate infinite;
  }
  &:nth-child(11) ${Bar} {
    animation: ${sound} 1.5s 0.15s ease-in-out alternate infinite;
  }
  &:nth-child(12) ${Bar} {
    animation: ${sound} 1.5s 0.25s ease-in-out alternate infinite;
  }
  &:nth-child(13) ${Bar} {
    animation: ${sound} 1.5s 0.12s ease-in-out alternate infinite;
  }
  &:nth-child(14) ${Bar} {
    animation: ${sound} 1.5s 0.05s ease-in-out alternate infinite;
  }
  &:nth-child(10) ${Bar} {
    animation: ${sound} 1.5s 0.3s ease-in-out alternate infinite;
  }
  &:nth-child(11) ${Bar} {
    animation: ${sound} 1.5s 0.1s ease-in-out alternate infinite;
  }
  &:nth-child(15) ${Bar} {
    animation: ${sound} 1.5s 0.14s ease-in-out alternate infinite;
  }
  &:nth-child(16) ${Bar} {
    animation: ${sound} 1.5s 0.12s ease-in-out alternate infinite;
  }
  &:nth-child(17) ${Bar} {
    animation: ${sound} 1.5s 0.05s ease-in-out alternate infinite;
  }
  &:nth-child(18) ${Bar} {
    animation: ${sound} 1.5s 0.16s ease-in-out alternate infinite;
  }
  &:nth-child(10) ${Bar} {
    animation: ${sound} 1.5s 0.05s ease-in-out alternate infinite;
  }
  &:nth-child(20) ${Bar} {
    animation: ${sound} 1.5s 0.1s ease-in-out alternate infinite;
  }
`;

export default { Container, Column, Bar };
