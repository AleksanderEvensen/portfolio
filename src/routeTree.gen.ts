/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DemoTanstackQueryImport } from './routes/demo.tanstack-query'
import { Route as DemoStartServerFuncsImport } from './routes/demo.start.server-funcs'
import { Route as DemoStartApiRequestImport } from './routes/demo.start.api-request'
import { Route as DemoFormSimpleImport } from './routes/demo.form.simple'
import { Route as DemoFormAddressImport } from './routes/demo.form.address'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DemoTanstackQueryRoute = DemoTanstackQueryImport.update({
  id: '/demo/tanstack-query',
  path: '/demo/tanstack-query',
  getParentRoute: () => rootRoute,
} as any)

const DemoStartServerFuncsRoute = DemoStartServerFuncsImport.update({
  id: '/demo/start/server-funcs',
  path: '/demo/start/server-funcs',
  getParentRoute: () => rootRoute,
} as any)

const DemoStartApiRequestRoute = DemoStartApiRequestImport.update({
  id: '/demo/start/api-request',
  path: '/demo/start/api-request',
  getParentRoute: () => rootRoute,
} as any)

const DemoFormSimpleRoute = DemoFormSimpleImport.update({
  id: '/demo/form/simple',
  path: '/demo/form/simple',
  getParentRoute: () => rootRoute,
} as any)

const DemoFormAddressRoute = DemoFormAddressImport.update({
  id: '/demo/form/address',
  path: '/demo/form/address',
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
    '/demo/tanstack-query': {
      id: '/demo/tanstack-query'
      path: '/demo/tanstack-query'
      fullPath: '/demo/tanstack-query'
      preLoaderRoute: typeof DemoTanstackQueryImport
      parentRoute: typeof rootRoute
    }
    '/demo/form/address': {
      id: '/demo/form/address'
      path: '/demo/form/address'
      fullPath: '/demo/form/address'
      preLoaderRoute: typeof DemoFormAddressImport
      parentRoute: typeof rootRoute
    }
    '/demo/form/simple': {
      id: '/demo/form/simple'
      path: '/demo/form/simple'
      fullPath: '/demo/form/simple'
      preLoaderRoute: typeof DemoFormSimpleImport
      parentRoute: typeof rootRoute
    }
    '/demo/start/api-request': {
      id: '/demo/start/api-request'
      path: '/demo/start/api-request'
      fullPath: '/demo/start/api-request'
      preLoaderRoute: typeof DemoStartApiRequestImport
      parentRoute: typeof rootRoute
    }
    '/demo/start/server-funcs': {
      id: '/demo/start/server-funcs'
      path: '/demo/start/server-funcs'
      fullPath: '/demo/start/server-funcs'
      preLoaderRoute: typeof DemoStartServerFuncsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/demo/form/address': typeof DemoFormAddressRoute
  '/demo/form/simple': typeof DemoFormSimpleRoute
  '/demo/start/api-request': typeof DemoStartApiRequestRoute
  '/demo/start/server-funcs': typeof DemoStartServerFuncsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/demo/form/address': typeof DemoFormAddressRoute
  '/demo/form/simple': typeof DemoFormSimpleRoute
  '/demo/start/api-request': typeof DemoStartApiRequestRoute
  '/demo/start/server-funcs': typeof DemoStartServerFuncsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/demo/form/address': typeof DemoFormAddressRoute
  '/demo/form/simple': typeof DemoFormSimpleRoute
  '/demo/start/api-request': typeof DemoStartApiRequestRoute
  '/demo/start/server-funcs': typeof DemoStartServerFuncsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/demo/tanstack-query'
    | '/demo/form/address'
    | '/demo/form/simple'
    | '/demo/start/api-request'
    | '/demo/start/server-funcs'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/demo/tanstack-query'
    | '/demo/form/address'
    | '/demo/form/simple'
    | '/demo/start/api-request'
    | '/demo/start/server-funcs'
  id:
    | '__root__'
    | '/'
    | '/demo/tanstack-query'
    | '/demo/form/address'
    | '/demo/form/simple'
    | '/demo/start/api-request'
    | '/demo/start/server-funcs'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DemoTanstackQueryRoute: typeof DemoTanstackQueryRoute
  DemoFormAddressRoute: typeof DemoFormAddressRoute
  DemoFormSimpleRoute: typeof DemoFormSimpleRoute
  DemoStartApiRequestRoute: typeof DemoStartApiRequestRoute
  DemoStartServerFuncsRoute: typeof DemoStartServerFuncsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DemoTanstackQueryRoute: DemoTanstackQueryRoute,
  DemoFormAddressRoute: DemoFormAddressRoute,
  DemoFormSimpleRoute: DemoFormSimpleRoute,
  DemoStartApiRequestRoute: DemoStartApiRequestRoute,
  DemoStartServerFuncsRoute: DemoStartServerFuncsRoute,
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
        "/demo/tanstack-query",
        "/demo/form/address",
        "/demo/form/simple",
        "/demo/start/api-request",
        "/demo/start/server-funcs"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/demo/tanstack-query": {
      "filePath": "demo.tanstack-query.tsx"
    },
    "/demo/form/address": {
      "filePath": "demo.form.address.tsx"
    },
    "/demo/form/simple": {
      "filePath": "demo.form.simple.tsx"
    },
    "/demo/start/api-request": {
      "filePath": "demo.start.api-request.tsx"
    },
    "/demo/start/server-funcs": {
      "filePath": "demo.start.server-funcs.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
