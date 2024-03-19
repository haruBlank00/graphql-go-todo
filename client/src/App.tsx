import { CreateTodoForm } from "./components/CreateTodoForm";
import { Todos } from "./components/Todos";
import { UsersList } from "./components/UsersList";

const App = () => {
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
};

export default App;
