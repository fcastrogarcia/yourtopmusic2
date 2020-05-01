import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Main = styled.main`
  display: grid;
  width: min(90vw, 1280px);
  margin: 50px 0;
  grid-template-rows: 55px auto auto;
  gap: 30px;
`;

const Title = styled(Typography).attrs({ variant: "h1" })`
  color: var(--gray-700);
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-300);
`;

export default { Main, Title, RowWrapper };
