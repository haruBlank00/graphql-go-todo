import { gql, useMutation } from "@apollo/client";

// const CREATE_A_TODO = graphql(`
//   mutation CreateATodo($input: TodoInput!) {
//     createTodo(input: $input) {
//       id
//       text
//       done
//     }
//   }
// `) as DocumentNode;

const CREATE_A_TODO = gql`
  mutation CreateATodo($input: TodoInput!) {
    createTodo(input: $input) {
      id
      text
      done
    }
  }
`;

export const useCreateTodo = () => {
  const [createTodo, { loading, data, error }] = useMutation(CREATE_A_TODO);

  return [
    createTodo,
    {
      isCreateTodoLoading: loading,
      newTodo: data,
      createTodoError: error,
    },
  ];
};
