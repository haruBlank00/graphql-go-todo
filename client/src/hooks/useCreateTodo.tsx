import { useMutation } from "@apollo/client";
import { CREATE_A_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";

export const useCreateTodo = () => {
  const [createTodo, { loading, data, error }] = useMutation(CREATE_A_TODO, {
    optimisticResponse: {
      createTodo: {
        id: "temp-id",
        __typename: "Todo",
        text: "optimistic todo",
        done: false,
        userId: 2,
      },
    },
    onCompleted(data) {
      const newTodo = data?.createTodo;
      console.log({ newTodo });
    },
    // refetchQueries: [GET_TODOS], // refetches posts after making a mutation
    update(cache, { data }) {
      const newTodo = data.createTodo;

      // we can read the current stored cache
      const cachedTodos = cache.readQuery({
        query: GET_TODOS,
      }) ?? { todos: [] };

      // we can update the cached data
      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todos: [...cachedTodos.todos, newTodo],
        },
      });

      // cache.modify({
      //   fields: {
      //     todos(existingTodos = []) {
      //       console.log({ existingTodos });
      //     },
      //   },
      // });

      // cache.modify({
      //   fields: {
      //     todos(existingTodos = []) {
      //       return [...existingTodos, newTodo];
      //     },
      //     // users() {},
      //   },
      // });
    },
    onQueryUpdated(observableQuery) {
      console.log({ observableQuery });
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
