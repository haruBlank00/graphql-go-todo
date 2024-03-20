/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateATodo($input: NewTodoInput!) {\n    createTodo(input: $input) {\n      id\n      text\n      done\n    }\n  }\n": types.CreateATodoDocument,
    "\n  mutation CreateNewComment($input: NewCommentInput!) {\n    addNewComment(input: $input) {\n      id\n      text\n      userId\n    }\n  }\n": types.CreateNewCommentDocument,
    "\n  query GetTodos {\n    todos {\n      id\n      text\n      done\n      userId\n    }\n  }\n": types.GetTodosDocument,
    "\n  query GetTodo($todoId: TodoId!) {\n    todo(input: $todoId) {\n      id\n      text\n      done\n      userId\n\n      comments {\n        id\n        text\n        userId\n      }\n    }\n  }\n": types.GetTodoDocument,
    "\n  subscription onCommentAdded($todoId: ID!) {\n    commentAdded(todoId: $todoId) {\n      id\n      text\n      userId\n    }\n  }\n": types.OnCommentAddedDocument,
    "\n  subscription CurrentServerTime {\n    currentTime {\n      unixTime\n      timeStamp\n    }\n  }\n": types.CurrentServerTimeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateATodo($input: NewTodoInput!) {\n    createTodo(input: $input) {\n      id\n      text\n      done\n    }\n  }\n"): (typeof documents)["\n  mutation CreateATodo($input: NewTodoInput!) {\n    createTodo(input: $input) {\n      id\n      text\n      done\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateNewComment($input: NewCommentInput!) {\n    addNewComment(input: $input) {\n      id\n      text\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNewComment($input: NewCommentInput!) {\n    addNewComment(input: $input) {\n      id\n      text\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTodos {\n    todos {\n      id\n      text\n      done\n      userId\n    }\n  }\n"): (typeof documents)["\n  query GetTodos {\n    todos {\n      id\n      text\n      done\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTodo($todoId: TodoId!) {\n    todo(input: $todoId) {\n      id\n      text\n      done\n      userId\n\n      comments {\n        id\n        text\n        userId\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTodo($todoId: TodoId!) {\n    todo(input: $todoId) {\n      id\n      text\n      done\n      userId\n\n      comments {\n        id\n        text\n        userId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription onCommentAdded($todoId: ID!) {\n    commentAdded(todoId: $todoId) {\n      id\n      text\n      userId\n    }\n  }\n"): (typeof documents)["\n  subscription onCommentAdded($todoId: ID!) {\n    commentAdded(todoId: $todoId) {\n      id\n      text\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription CurrentServerTime {\n    currentTime {\n      unixTime\n      timeStamp\n    }\n  }\n"): (typeof documents)["\n  subscription CurrentServerTime {\n    currentTime {\n      unixTime\n      timeStamp\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;