import styled from "styled-components";
import BaseAvatar from "@material-ui/core/Avatar";
import Button from "material/IconButton";
import BaseSkeleton from "@material-ui/lab/Skeleton";
import { mediaBreaks } from "theme/devices";

const Avatar = styled(BaseAvatar)`
  && {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: var(--shadow);
    background-color: var(--gray-600);
    text-transform: uppercase;
  }
  ${mediaBreaks.mobile`
    && {
      width: 36px;
      height: 36px;
    }
  `}
`;

const IconButton = styled(Button)`
  && {
    padding: 8px;
  }
`;

const Skeleton = styled(BaseSkeleton).attrs({
  variant: "circle",
  height: 32,
  width: 32,
})`
  ${mediaBreaks.mobile`
    && {
      width: 36px;
      height: 36px;
    }
  `}
`;

export default { Avatar, IconButton, Skeleton };
