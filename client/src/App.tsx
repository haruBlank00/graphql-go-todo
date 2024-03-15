import { CreateTodoForm } from "./components/CreateTodoForm";
import { Todos } from "./components/Todos";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        To do app with GraphQL and Apollo Client
      </h1>

      <div>
        <CreateTodoForm />
      </div>
      <Todos />
    </div>
  );
};

export default App;
