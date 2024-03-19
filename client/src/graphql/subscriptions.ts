import { gql } from "@apollo/client";

export const COMMENTS_SUBSCRIPTIONS = gql`
  subscription onCommentAdded {
    commendAdded(todoId: $todoId) {
      id
      text
      userId
    }
  }
`;
