/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as FloorsIndexImport } from './routes/floors/index'
import { Route as FloorsSequenceImport } from './routes/floors/$sequence'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const FloorsIndexRoute = FloorsIndexImport.update({
  id: '/floors/',
  path: '/floors/',
  getParentRoute: () => rootRoute,
} as any)

const FloorsSequenceRoute = FloorsSequenceImport.update({
  id: '/floors/$sequence',
  path: '/floors/$sequence',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/floors/$sequence': {
      id: '/floors/$sequence'
      path: '/floors/$sequence'
      fullPath: '/floors/$sequence'
      preLoaderRoute: typeof FloorsSequenceImport
      parentRoute: typeof rootRoute
    }
    '/floors/': {
      id: '/floors/'
      path: '/floors'
      fullPath: '/floors'
      preLoaderRoute: typeof FloorsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/floors/$sequence': typeof FloorsSequenceRoute
  '/floors': typeof FloorsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/floors/$sequence': typeof FloorsSequenceRoute
  '/floors': typeof FloorsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/floors/$sequence': typeof FloorsSequenceRoute
  '/floors/': typeof FloorsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/floors/$sequence' | '/floors'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/floors/$sequence' | '/floors'
  id: '__root__' | '/' | '/floors/$sequence' | '/floors/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  FloorsSequenceRoute: typeof FloorsSequenceRoute
  FloorsIndexRoute: typeof FloorsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FloorsSequenceRoute: FloorsSequenceRoute,
  FloorsIndexRoute: FloorsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/floors/$sequence",
        "/floors/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/floors/$sequence": {
      "filePath": "floors/$sequence.tsx"
    },
    "/floors/": {
      "filePath": "floors/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */