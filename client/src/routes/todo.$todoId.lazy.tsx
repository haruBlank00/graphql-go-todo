import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useGetTodo } from "../hooks/useGetTodo";

export const Route = createLazyFileRoute("/todo/$todoId")({
  component: TodoPage,
});

function TodoPage() {
  const { todoId } = Route.useParams();
  const { isTodoLoading, todo, todoQueryError, todoQueryNetworkStatus } =
    useGetTodo({ id: todoId });

  const handleCompleteToggle = () => {
    // setTodo((prevTodo) => ({ ...prevTodo, completed: !prevTodo.completed }));
  };

  if (!todo) {
    return <h1>item not found</h1>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Todo {todo.id}</h1>
      <div className="mb-4">
        <p className="text-lg mb-2">
          <span className="font-bold">Task:</span> {todo.text}
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Status:</span>{" "}
          {todo.done ? "Completed" : "Incomplete"}
        </p>
        <button
          className={`px-4 py-2 ${todo.done ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"} text-white rounded`}
          onClick={handleCompleteToggle}
        >
          {todo.done ? "Mark Incomplete" : "Mark Complete"}
        </button>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Add Comment:</h2>
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Enter your comment here..."
        ></textarea>
        <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
          Add Comment
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Comments:</h2>
        <ul>
          {todo.comments.map((comment) => (
            <li key={comment.id} className="mb-4 border p-2 rounded">
              <p>
                <span className="font-bold">{comment.userId}:</span>{" "}
                {comment.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
