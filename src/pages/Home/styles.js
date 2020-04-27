import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Main = styled.main`
  margin: 50px;
  display: grid;
  height: 100%;
  grid-template-rows: 55px 70px auto;
  gap: 15px;
`;

const Title = styled(Typography).attrs({ variant: "h1" })`
  color: var(--gray-700);
`;

export default { Main, Title };
