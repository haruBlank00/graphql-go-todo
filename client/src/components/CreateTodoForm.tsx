import { FormEventHandler, useState } from "react";
import { NewTodoInput } from "../gql/graphql";
import { useCreateTodo } from "../hooks/useCreateTodo";
import { handleFormInputChange } from "../utils/utils";

export const CreateTodoForm = () => {
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
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create todo</h2>
      <div className="flex gap-4">
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
    </div>
  );
};
