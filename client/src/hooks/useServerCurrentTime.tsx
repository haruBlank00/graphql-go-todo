import { useSubscription } from "@apollo/client";
import { CURRENT_SERVER_TIME } from "../graphql/subscriptions";

export const useServerCurrentTime = () => {
  const { data, loading, variables, error } =
    useSubscription(CURRENT_SERVER_TIME);

  console.log({ data, error }, "from subs");

  return {
    currentTime: data?.currentTime,
    isCurrentServerTimeLoading: loading,
    currentServerTimeVariables: variables,
    currentServerTimeError: error,
  };
};
