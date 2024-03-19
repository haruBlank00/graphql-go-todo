/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type DeleteTodoInput = {
  todoId: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createuser: User;
  deleteTodo?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateTodoArgs = {
  input: NewTodoInput;
};


export type MutationCreateuserArgs = {
  input: NewUserInput;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};

export type NewTodoInput = {
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type NewUserInput = {
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
  users: Array<User>;
};

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded?: Maybe<Comment>;
};


export type SubscriptionCommentAddedArgs = {
  todoId: Scalars['ID']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, text: string, done: boolean, userId: string }> };


export const GetTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"done"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetTodosQuery, GetTodosQueryVariables>;