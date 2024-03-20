import { Link } from "@tanstack/react-router";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useGetTodos } from "../hooks/useGetTodos";

import { FaEye, FaTrash } from "react-icons/fa"; // Import the delete icon from react-icons

const TodosMapper = ({
  todos,
  onDeleteTodo,
}: {
  todos: { id: string; text: string; done: boolean }[];
  onDeleteTodo: (input: { variables: { input: { todoId: string } } }) => void; // Function to handle todo deletion
}) => {
  return todos.map((todo, i) => (
    <div key={todo.id} className="flex gap-2 items-center mb-2 cursor-pointer">
      <p
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          marginRight: "8px",
        }}
      >
        {i + 1} Todo: {todo.text}
      </p>
      <Link to="/todo/$todoId" params={{ todoId: todo.id }}>
        <FaEye className="text-blue-500" />
      </Link>
      <FaTrash
        className="text-red-500 cursor-pointer"
        onClick={() =>
          onDeleteTodo({
            variables: {
              input: {
                todoId: todo.id,
              },
            },
          })
        }
      />
    </div>
  ));
};

export default TodosMapper;

export const Todos = () => {
  const { isTodosLoading, todos, todosError, todosNetworkStatus } =
    useGetTodos();
  const [deleteTodo, { isTodoDeleting, deletedTodo, deleteTodoError }] =
    useDeleteTodo();

  console.log({ deletedTodo });
  const isEmpty = !todos || todos.length === 0;

  if (isEmpty) return <p>Todos is empty</p>;

  return (
    <div className="border border-gray-300 rounded-md p-4 mt-8">
      {todosError && (
        <p className="text-red-600 text-xl mb-4">{todosError.message}</p>
      )}

      {isTodosLoading && <p>Todos are Loading...</p>}

      {todosNetworkStatus && <p>Todos network status: {todosNetworkStatus}</p>}

      <TodosMapper todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
};
