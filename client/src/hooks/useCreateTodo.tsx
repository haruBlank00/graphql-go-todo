import { gql, useMutation } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";

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
    // refetchQueries: [GET_TODOS], // refetches posts after making a mutation
    update(cache, { data }) {
      const newTodo = data.createTodo;

      // we can read the current stored cache
      const cachedTodos = cache.readQuery({
        query: GET_TODOS,
      }) ?? { todos: [] };

      // we can update the cached data
      // cache.writeQuery({
      //   query: GET_TODOS,
      //   data: {
      //     todos: [...cachedTodos.todos, newTodo],
      //   },
      // });

      // cache.modify({
      //   fields: {
      //     todos(existingTodos = []) {
      //       console.log({ existingTodos });
      //     },
      //   },
      // });
      cache.modify({
        fields: {
          todos() {},
        },
      });
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
