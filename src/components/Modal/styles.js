import styled from "styled-components";
import shadows from "theme/shadows";
import BaseModal from "@material-ui/core/Modal";

const Modal = styled(BaseModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div.attrs({ className: "modal__inner-wrapper" })`
  background: var(--white);
  border-radius: 20px;
  box-shadow: ${shadows.md};
  outline: none;
  width: min-content;
  overflow: hidden;
`;

export default { Wrapper, Modal };
