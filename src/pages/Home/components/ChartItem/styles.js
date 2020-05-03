import styled, { css } from "styled-components";
import Typography from "material/Typography";
import Grid from "material/Grid";
import teal from "material/colors/teal";
import mixins from "theme/mixins";
import shadows from "theme/shadows";

const Genres = styled.p`
  font-size: 12px;
  color: var(--gray-600);
  ${mixins.textEllipsis(1)}
  justify-self: flex-start;
  max-width: 300px;
  padding-left: 20px;
  text-transform: capitalize;
`;

const Card = styled.div`
  display: grid;
  flex: 1;
  grid-template: 1fr 1.5fr / 55px 85px 4fr;
  grid-template-areas:
    "rank image name"
    "rank image genres";
  gap: 0 10px;
  min-width: 500px;
  width: 100%;
  height: 100px;
  box-shadow: ${shadows.fuzzy};
  border: 1px solid var(--gray-100);
  margin: 10px 20px;
  align-items: center;
  justify-items: center;
  border-radius: 4px;

  ${({ track }) =>
    track &&
    css`
      grid-template: auto auto auto / 55px 85px 5fr 1fr;
      grid-template-areas:
        "rank image track activity"
        "rank image artist activity"
        "rank image album activity";
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
`;

const Rank = styled(Typography).attrs({ variant: "h2" })`
  position: relative;
  z-index: 1;
  grid-area: rank;
  color: var(--gray-700);
`;

const Image = styled.img`
  grid-area: image;
  height: 85px;
  width: 85px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: ${shadows.md};
`;

const Name = styled(Typography).attrs({ variant: "h3" })`
  grid-area: name;
  color: var(--gray-700);
  justify-self: flex-start;
  align-self: flex-end;
  padding-left: 20px;
`;

const Track = styled(Name)`
  grid-area: track;
  align-self: center;
  ${mixins.textEllipsis(2)}
  padding-top: 4px;

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
  margin-bottom: 4px;
`;

export default { Card, Image, Rank, Name, Genres, Track, Artist, Album };
