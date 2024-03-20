import { useQuery } from "@apollo/client";
import { GET_TODO } from "../graphql/queries";
import { QueryTodoArgs } from "../gql/graphql";

export const useGetTodo = (todoInput: { id: string }) => {
  const { data, loading, networkStatus, error } = useQuery(GET_TODO, {
    variables: {
      todoId: {
        id: todoInput.id,
      },
    },
  });

  console.log({ data });

  return {
    todo: data?.todo,
    isTodoLoading: loading,
    todoQueryNetworkStatus: networkStatus,
    todoQueryError: error,
  };
};
