import styled from "styled-components";

export const BaseLink = styled.a`
  text-decoration: none;
  font-weight: ${({ thin }) => (thin ? "300" : "800")};
  word-break: break-all;

  &:hover {
    color: var(--blue);
  }
`;

export const LinkDark = styled(BaseLink)`
  color: var(--very-dark-blue);
`;

export const LinkLight = styled(BaseLink)`
  color: var(--dark-grayish-blue);
`;

export const LinkBlue = styled(BaseLink)`
  color: var(--blue);
`;
