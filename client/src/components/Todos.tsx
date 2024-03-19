import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useGetTodos } from "../hooks/useGetTodos";

import { FaTrash } from "react-icons/fa"; // Import the delete icon from react-icons

const TodosMapper = ({
  todos,
  onDeleteTodo,
}: {
  todos: { id: string; text: string; done: boolean }[];
  onDeleteTodo: (input: { variables: { input: { todoId: string } } }) => void; // Function to handle todo deletion
}) => {
  return todos.map((todo, i) => (
    <div key={todo.id} className="flex items-center mb-2">
      <p
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          marginRight: "8px",
        }}
      >
        {i + 1} Todo: {todo.text}
      </p>
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
        // Call onDeleteTodo function when the delete icon is clicked
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
