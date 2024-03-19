import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/todo/$todoId")({
  component: TodoPage,
});

function TodoPage() {
  const { todoId } = Route.useParams();

  return <h1>todo {todoId}</h1>;
}
