import { DocumentNode, useMutation } from "@apollo/client";
import { CREATE_NEW_COMMENT } from "../graphql/mutations";
import { UseAddCommentHookReturnType } from "../types";

export const useAddComment = (): UseAddCommentHookReturnType => {
  const [addComment, { data, loading, error }] = useMutation(
    CREATE_NEW_COMMENT as DocumentNode,
    {
      update(cache, { data: { addNewComment } }, { variables }) {
        cache.modify({
          id: cache.identify({
            __typename: "Todo",
            id: variables.input.todoId,
          }),
          fields: {
            comments(existingComments = []) {
              return [...existingComments, addNewComment];
            },
          },
        });
      },
    }
  );

  return [
    addComment,
    {
      isCommentAdding: loading,
      addedComment: data,
      addCommentError: error,
    },
  ];
};
