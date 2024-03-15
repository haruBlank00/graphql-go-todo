import { useQuery, QueryOptions } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";

export const useGetTodos = () => {
  const { data, loading, networkStatus, error } = useQuery(GET_TODOS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first",
    onCompleted(data) {
      console.log({ data });
    },
  });

  return {
    todos: data?.todos,
    isTodosLoading: loading,
    todosNetworkStatus: networkStatus,
    todosError: error,
  };
};
