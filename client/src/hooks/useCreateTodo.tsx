import { gql, useMutation } from "@apollo/client";

const CREATE_A_TODO = gql`
  mutation CreateATodo($input: NewTodoInput!) {
    createTodo(input: $input) {
      id
      text
      done
    }
  }
`;

export const useCreateTodo = () => {
  const [createTodo, { loading, data, error }] = useMutation(CREATE_A_TODO, {
    onCompleted(data) {
      const newTodo = data?.createTodo;
      console.log({ newTodo });
    },
  });

  return [
    createTodo,
    {
      isCreateTodoLoading: loading,
      newTodo: data,
      createTodoError: error,
    },
  ];
};
