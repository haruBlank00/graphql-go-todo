import { useGetUsers } from "../hooks/useGetUsers";

export const UsersList = () => {
  const { isUsersLoading, userQueryError, users } = useGetUsers();

  if (isUsersLoading) {
    return <p>Loading...</p>;
  }

  if (userQueryError) {
    return <p>Error: {userQueryError.message}</p>;
  }

  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Users</h2>
      <ul>
        {users.map((user: { id: string; name: string; email: string }) => (
          <li key={user.id} className="mb-4">
            <div className="border p-4 rounded shadow">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
