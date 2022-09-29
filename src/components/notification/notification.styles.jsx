import styled from "styled-components";
import { LinkBlue, LinkDark, LinkLight } from "../CustomLink/custom-link.styles";

export const BaseNotification = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 20px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ read }) => (read ? "var(--white)" : "var(--very-light-grayish-blue)")};

  .dot {
    display: ${({ read }) => (read ? "none" : "inline-block")};
    width: 8px;
    height: 8px;
    margin: 0 0 2px 5px;
    border-radius: 50%;
    background-color: var(--red);
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & img {
    height: 50px;
    width: auto;
  }

  & ${LinkDark} {
    margin-right: 4px;
  }

  & ${LinkLight}, & ${LinkBlue} {
    margin-left: 4px;
  }

  .notification-title-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 5px;

    & div {
      font-size: 16px;
      font-weight: 300;
      color: var(--dark-grayish-blue);
    }

    & p {
      font-size: 17px;
      font-weight: 300;
      color: var(--grayish-blue);
    }
  }
`;

export const CommentNotification = styled(BaseNotification)`
  grid-template-columns: min-content 1fr min-content;

  .post-image {
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 10px;

    &:hover {
      border: 3px solid var(--light-grayish-blue-2);
    }
  }
`;

export const MessageNotification = styled(BaseNotification)`
  row-gap: 15px;

  .message-text {
    grid-column: 2/-1;
    border-radius: 3px;
    padding: 15px 20px;
    border: 1px solid var(--light-grayish-blue-2);
    color: var(--dark-grayish-blue);
    cursor: pointer;

    &:hover {
      background-color: var(--light-grayish-blue-1);
      border-color: var(--light-grayish-blue-1);
    }
  }
`;
