import { gql, useMutation } from "@apollo/client";

const DELETE_A_TODO = gql`
  mutation DeleteTodo($input: DeleteTodoInput!) {
    deleteTodo(input: $input)
  }
`;

export const useDeleteTodo = () => {
  const [deleteTodo, { loading, data, error }] = useMutation(DELETE_A_TODO);

  return [
    deleteTodo,
    {
      isTodoDeleting: loading,
      deletedTodo: data,
      deleteTodoError: error,
    },
  ];
};
