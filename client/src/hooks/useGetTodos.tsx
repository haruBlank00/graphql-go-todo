import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";

export const useGetTodos = () => {
  const { data, loading, networkStatus, error } = useQuery(GET_TODOS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first",
  });

  return {
    todos: data?.todos,
    isTodosLoading: loading,
    todosNetworkStatus: networkStatus,
    todosError: error,
  };
};
