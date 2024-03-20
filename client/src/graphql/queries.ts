import { graphql } from "../gql";

export const GET_TODOS = graphql(`
  query GetTodos {
    todos {
      id
      text
      done
      userId
    }
  }
`);

export const GET_TODO = graphql(`
  query GetTodo($todoId: TodoId!) {
    todo(input: $todoId) {
      id
      text
      done
      userId

      comments {
        id
        text
        userId
      }
    }
  }
`);
