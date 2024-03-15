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
    // createTodo(newTodoInput);
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
    <div>
      <h1>To do app with graphql and apollo client</h1>

      <div>
        <h1>Create todo</h1>
        <form onSubmit={createNewTodoHandler} style={{}}>
          <input
            type="text"
            placeholder="john doe"
            name="text"
            value={newTodoInput.text}
            onChange={(e) => handleFormInputChange(e, setNewTodoInput)}
          />
          <input
            type="text"
            placeholder="userId: 1, 2"
            name="userId"
            value={newTodoInput.text}
            onChange={(e) => handleFormInputChange(e, setNewTodoInput)}
          />
          <button type="submit">Create new todo</button>
        </form>
      </div>

      <div
        style={{
          border: "2px solid black",
          padding: "8px",
        }}
      >
        {todosError && (
          <p style={{ color: "red", fontSize: 24 }}>{todosError.message}</p>
        )}

        {isTodosLoading && <p>Todos are Loading...</p>}

        {todosNetworkStatus && <p>Todos network status: {}</p>}

        {todos && <Todos todos={todos} />}
      </div>
    </div>
  );
};

export default App;
