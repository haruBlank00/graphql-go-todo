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
  addNewComment: Comment;
  createTodo: Todo;
  createuser: User;
  deleteTodo: Scalars['Boolean']['output'];
};


export type MutationAddNewCommentArgs = {
  input: NewCommentInput;
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

export type NewCommentInput = {
  text: Scalars['String']['input'];
  todoId: Scalars['ID']['input'];
  userId: Scalars['String']['input'];
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
  todo: Todo;
  todos: Array<Todo>;
  users: Array<User>;
};


export type QueryTodoArgs = {
  input?: InputMaybe<TodoId>;
};

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded?: Maybe<Comment>;
  currentTime: Time;
};


export type SubscriptionCommentAddedArgs = {
  todoId: Scalars['ID']['input'];
};

export type Time = {
  __typename?: 'Time';
  timeStamp: Scalars['String']['output'];
  unixTime: Scalars['Int']['output'];
};

export type Todo = {
  __typename?: 'Todo';
  comments: Array<Comment>;
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type TodoId = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateATodoMutationVariables = Exact<{
  input: NewTodoInput;
}>;


export type CreateATodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, text: string, done: boolean } };

export type CreateNewCommentMutationVariables = Exact<{
  input: NewCommentInput;
}>;


export type CreateNewCommentMutation = { __typename?: 'Mutation', addNewComment: { __typename?: 'Comment', id: string, text: string, userId: string } };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, text: string, done: boolean, userId: string }> };

export type GetTodoQueryVariables = Exact<{
  todoId: TodoId;
}>;


export type GetTodoQuery = { __typename?: 'Query', todo: { __typename?: 'Todo', id: string, text: string, done: boolean, userId: string, comments: Array<{ __typename?: 'Comment', id: string, text: string, userId: string }> } };

export type OnCommentAddedSubscriptionVariables = Exact<{
  todoId: Scalars['ID']['input'];
}>;


export type OnCommentAddedSubscription = { __typename?: 'Subscription', commentAdded?: { __typename?: 'Comment', id: string, text: string, userId: string } | null };

export type CurrentServerTimeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CurrentServerTimeSubscription = { __typename?: 'Subscription', currentTime: { __typename?: 'Time', unixTime: number, timeStamp: string } };


export const CreateATodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateATodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"done"}}]}}]}}]} as unknown as DocumentNode<CreateATodoMutation, CreateATodoMutationVariables>;
export const CreateNewCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNewComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNewComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<CreateNewCommentMutation, CreateNewCommentMutationVariables>;
export const GetTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"done"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetTodosQuery, GetTodosQueryVariables>;
export const GetTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TodoId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"done"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<GetTodoQuery, GetTodoQueryVariables>;
export const OnCommentAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"onCommentAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"todoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<OnCommentAddedSubscription, OnCommentAddedSubscriptionVariables>;
export const CurrentServerTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"CurrentServerTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unixTime"}},{"kind":"Field","name":{"kind":"Name","value":"timeStamp"}}]}}]}}]} as unknown as DocumentNode<CurrentServerTimeSubscription, CurrentServerTimeSubscriptionVariables>;