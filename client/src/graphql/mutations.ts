import { gql } from "@apollo/client";

export const CREATE_A_TODO = gql`
  mutation CreateATodo($input: NewTodoInput!) {
    createTodo(input: $input) {
      id
      text
      done
    }
  }
`;
export const CREATE_NEW_COMMENT = gql`
  mutation CreateNewComment($input: NewCommentInput!) {
    addNewComment(input: $input) {
      id
      text
      userId
    }
  }
`;
