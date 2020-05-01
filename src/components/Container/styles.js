import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { mediaBreaks } from "../../theme/devices";

const Container = styled(Grid).attrs({
  container: true,
  justify: "center",
})``;

const Content = styled(Grid).attrs({
  classes: {
    item: "content",
  },
  item: true,
  xs: 12,
  xl: 11,
})`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${mediaBreaks.tabletLg`
	  max-width: 1280px
	`}
`;

export default { Container, Content };
