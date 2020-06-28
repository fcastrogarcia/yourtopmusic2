import styled from "styled-components";
import { withTheme } from "material";
import { FaSpotify, FaWhatsapp, FaTwitter } from "react-icons/fa";
import shadows from "theme/shadows";

const Overlay = styled.div`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--white);
  background: var(--gray-900);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  border-radius: 50px;
  z-index: 10;
  box-shadow: ${shadows.default};
`;

const Icon = (icon) => styled(icon).attrs({ size: 24 })`
  transform: scale(0.25);
  transition: all 0.5s ease;
  margin: 0 12px;
  color: var(--gray-900);
  cursor: pointer;
  display: flex;
`;

const Spotify = Icon(FaSpotify);
const Whatsapp = Icon(FaWhatsapp);
const Twitter = Icon(FaTwitter);

const ShareButton = withTheme(styled.div`
  border-radius: 50px;
  width: 200px;
  height: 48px;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);
  background: var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  position: relative;
  top: 22px;
  &:hover {
    transform: scale(1.1);
    & ${Overlay} {
      transform: translateX(-200px);
      transition-delay: 0.15s;
    }
    & ${Spotify} {
      transform: scale(1);
      transition-delay: 0.35s;
    }
    & ${Whatsapp} {
      transform: scale(1);
      transition-delay: 0.25s;
    }
    & ${Twitter} {
      transition-delay: 0.15s;
      transform: scale(1);
    }
  }
`);

export default { ShareButton, Overlay, Spotify, Twitter, Whatsapp };
