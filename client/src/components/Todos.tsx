import { useGetTodos } from "../hooks/useGetTodos";

const TodosMapper = ({
  todos,
}: {
  todos: { id: string; text: string; done: boolean }[];
}) => {
  console.log({ todos });
  return todos.map((todo, i) => (
    <p
      key={todo.id}
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
    >
      {i + 1} Todo: {todo.text}
    </p>
  ));
};
export const Todos = () => {
  const { isTodosLoading, todos, todosError, todosNetworkStatus } =
    useGetTodos();

  const isEmpty = !todos || todos.length === 0;

  if (isEmpty) return <p>Todos is empty</p>;

  return (
    <div className="border border-gray-300 rounded-md p-4 mt-8">
      {todosError && (
        <p className="text-red-600 text-xl mb-4">{todosError.message}</p>
      )}

      {isTodosLoading && <p>Todos are Loading...</p>}

      {todosNetworkStatus && <p>Todos network status: {todosNetworkStatus}</p>}

      <TodosMapper todos={todos} />
    </div>
  );
};
