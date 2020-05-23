import styled, { css } from "styled-components";
import Typography from "material/Typography";
import mixins from "theme/mixins";
import shadows from "theme/shadows";
import { mediaBreaks } from "theme/devices";

const Genres = styled.p`
  font-size: 12px;
  color: var(--gray-600);
  ${mixins.textEllipsis(1)}
  justify-self: flex-start;
  max-width: 300px;
  padding-left: 20px;
  text-transform: capitalize;
  ${mediaBreaks.mobile`
    padding-left: 14px;
  `}
`;

const Card = styled.div`
  display: grid;
  position: relative;
  grid-template: 1fr 1.5fr / 55px 85px 4fr;
  grid-template-areas:
    "rank image name"
    "rank image genres";
  grid-gap: 0 10px;
  box-shadow: ${shadows.fuzzy};
  border: 1px solid var(--gray-100);
  align-items: center;
  justify-items: center;
  border-radius: 4px;
  transition: all .15s ease-in-out;
  ${mediaBreaks.mobile`
    padding-right: 12px;
    grid-gap: 0 6px;
    grid-template: 1fr 1.5fr / 45px 75px 4fr;
  `}

  ${({ isTrack }) =>
    isTrack &&
    css`
      width: 97%;
      grid-template: auto auto auto / 55px 85px 5fr 0.65fr;
      grid-template-areas:
        "rank image track player"
        "rank image artist player"
        "rank image album player";
      ${mediaBreaks.mobile`
        padding-right: 0;
        grid-template: auto auto auto / 45px 75px 5fr 0.65fr;
      `}
    `}

  ${({ isMobile }) =>
    !isMobile &&
    css`
      &:hover ${Genres} {
        -webkit-line-clamp: 3;
      }
      &:hover ${Album} {
        -webkit-line-clamp: 1;
      }
    `}

    ${({ isPlaying }) =>
      isPlaying &&
      css`
        position: sticky;
        top: 68px;
        bottom: 60px;
        z-index: 30;
        background: var(--white);
        box-shadow: ${shadows.xl};
      `}
`;

const Rank = styled(Typography).attrs({ variant: "h2" })`
  position: relative;
  z-index: 1;
  grid-area: rank;
  color: var(--gray-700);
  ${mediaBreaks.mobile`
    && {
      font-size: 20px;
    }
  `}
`;

const Image = styled.img`
  grid-area: image;
  height: 85px;
  width: 85px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: ${shadows.md};
  ${mediaBreaks.mobile`
    height: 75px;
    width: 75px;
  `}
`;

const Name = styled(Typography).attrs({ variant: "h3" })`
  grid-area: name;
  color: var(--gray-700);
  justify-self: flex-start;
  align-self: flex-end;
  padding-left: 20px;
  ${mediaBreaks.mobile`
    padding-left: 14px;
  `}

  && {
    line-height: 19px;
  }
`;

const Track = styled(Name)`
  grid-area: track;
  align-self: center;
  ${mixins.textEllipsis(2)}
  padding-top: 8px;

  && {
    font-size: 13px;
    line-height: 18px;
  }
`;

const Artist = styled(Genres)`
  grid-area: artist;
`;

const Album = styled(Genres)`
  grid-area: album;
  margin-bottom: 8px;
`;

const Player = styled.div`
  grid-area: player;
  width: 100%;
  height: 100%;
  background: var(--gray-100);
  display: flex;
  align-items: center;
  overflow: hidden;
  ${mediaBreaks.mobile`
    background: none;
  `}
`;

export default {
  Card,
  Image,
  Rank,
  Name,
  Genres,
  Track,
  Artist,
  Album,
  Player,
};
