import React, {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  useState,
} from "react";
import { Todos } from "./components/Todos";
import { NewTodoInput } from "./gql/graphql";
import { useGetTodos } from "./hooks/useGetTodos";
import { useCreateTodo } from "./hooks/useCreateTodo";

const App = () => {
  const { isTodosLoading, todos, todosError, todosNetworkStatus } =
    useGetTodos();
  const [createTodo, { isCreateTodoLoading, newTodo, createTodoError }] =
    useCreateTodo();

  const [newTodoInput, setNewTodoInput] = useState<NewTodoInput>({
    text: "",
    userId: "",
  });

  const createNewTodoHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createTodo({
      variables: {
        input: newTodoInput,
      },
    });
  };

  const handleFormInputChange = <T,>(
    e: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<React.SetStateAction<T>>
  ) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        To do app with GraphQL and Apollo Client
      </h1>

      <div>
        <h2 className="text-2xl font-bold mb-4">Create todo</h2>
        <form
          onSubmit={createNewTodoHandler}
          className="p-4 border border-gray-300 rounded-md"
        >
          {isCreateTodoLoading && <p>Creating new todo...</p>}
          {createTodoError && (
            <p>Error creating new todo: {createTodoError.message} </p>
          )}
          <input
            type="text"
            placeholder="Enter todo"
            name="text"
            value={newTodoInput.text}
            onChange={(e) => handleFormInputChange(e, setNewTodoInput)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter user ID"
            name="userId"
            value={newTodoInput.userId}
            onChange={(e) => handleFormInputChange(e, setNewTodoInput)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create new todo
          </button>
        </form>
      </div>

      <div className="border border-gray-300 rounded-md p-4 mt-8">
        {todosError && (
          <p className="text-red-600 text-xl mb-4">{todosError.message}</p>
        )}

        {isTodosLoading && <p>Todos are Loading...</p>}

        {todosNetworkStatus && (
          <p>Todos network status: {todosNetworkStatus}</p>
        )}

        {todos && <Todos todos={todos} />}
      </div>
    </div>
  );
};

export default App;
