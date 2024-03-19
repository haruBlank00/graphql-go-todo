import { createFileRoute } from "@tanstack/react-router";
import { CreateTodoForm } from "../components/CreateTodoForm";
import { Todos } from "../components/Todos";
import { UsersList } from "../components/UsersList";

export const Route = createFileRoute("/")({
  component: Index,
});
function Index() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        To do app with GraphQL and Apollo Client
      </h1>

      <div className="flex gap-4">
        <CreateTodoForm />
        <UsersList />
      </div>
      <Todos />
    </div>
  );
}
