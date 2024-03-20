/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const TodoTodoIdLazyImport = createFileRoute('/todo/$todoId')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TodoTodoIdLazyRoute = TodoTodoIdLazyImport.update({
  path: '/todo/$todoId',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/todo.$todoId.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/todo/$todoId': {
      preLoaderRoute: typeof TodoTodoIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  TodoTodoIdLazyRoute,
])

/* prettier-ignore-end */