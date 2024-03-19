import { gql, useQuery } from "@apollo/client";

export const GET_USERS = gql(`
  query GetUsers {
    users {
      id
      name
    }
  }
`);

export const useGetUsers = () => {
  const { data, loading, networkStatus, error } = useQuery(GET_USERS);

  return {
    users: data?.users,
    isUsersLoading: loading,
    userQueryNetworkStatus: networkStatus,
    userQueryError: error,
  };
};
