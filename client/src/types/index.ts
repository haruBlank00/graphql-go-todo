import { ApolloError, MutationFunction } from "@apollo/client";

export type UseAddCommentHookReturnType = [
  MutationFunction<Comment>,
  {
    isCommentAdding: boolean;
    addedComment: Comment | undefined;
    addCommentError: ApolloError | undefined;
  },
];
