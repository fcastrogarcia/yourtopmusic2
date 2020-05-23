import styled from "styled-components";
import BaseAvatar from "@material-ui/core/Avatar";
import Button from "material/IconButton";
import BaseSkeleton from "@material-ui/lab/Skeleton";

const Avatar = styled(BaseAvatar)`
  && {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: var(--shadow);
    background-color: var(--gray-600);
    text-transform: uppercase;
  }
`;

const IconButton = styled(Button)`
  && {
    padding: 8px;
  }
`;

const Skeleton = styled(BaseSkeleton).attrs({
  variant: "circle",
  height: 36,
  width: 36,
})``;

export default { Avatar, IconButton, Skeleton };
