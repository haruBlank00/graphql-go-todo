import { gql } from "@apollo/client";

export const COMMENTS_SUBSCRIPTIONS = gql`
  subscription onCommentAdded($todoId: ID!) {
    commentAdded(todoId: $todoId) {
      id
      text
      userId
    }
  }
`;
