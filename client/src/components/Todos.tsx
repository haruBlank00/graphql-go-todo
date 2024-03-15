export const Todos = ({
  todos,
}: {
  todos: { text: string; id: string; done: boolean }[];
}) => {
  const isEmpty = todos.length === 0;

  if (isEmpty) return <p>Todos is empty</p>;
  return todos.map((todo) => (
    <p
      key={todo.id}
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
    >
      Todo: {todo.text}
    </p>
  ));
};
