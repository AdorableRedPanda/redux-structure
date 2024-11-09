# redux-structure-demo

## Graph Editing with Version Control

This repository presents an example structure of the client-side part of an application for collaborative data editing. 
The main goal is to demonstrate the approach to the codebase and the use of `Redux`.

[Demo](https://adorableredpanda.github.io/redux-structure-demo/)

## Main requirements

1. **Support for tree-like data structure**
    - Enable adding, deleting, and editing of nodes.
    - Allow the creation and removal of connections (edges) between nodes.
    - Deleting a node also removes its child nodes and any associated edges.

2. **Collaborative editing**
    - Support for simultaneous project editing by multiple users.
    - Real-time synchronization of changes between clients.

3. **Changes history management and versioning**
    - Saving the history of all changes with the ability to roll back.
    - Ability to return to the previous version of the project.

For simplicity, the editable project is represented as an object of the following type:
```typescript
interface Project {
    nodes: Node[];
    edges: Edge[];
}

interface Position {
    x: number;
    y: number;
}

interface Node {
    id: ID;
    value: string;
    children: ID[];
    position: Position;
    parent: ID | null;
}

export interface Edge {
    id: ID;
    relation: [ID, ID];
}
```
## State manager

Any state manager implementing the Flux architecture can be used for data handling, but in this example, **Redux** is used.
- **Collaborative editing** is simplified through the use of serializable actions, which can be easily transmitted over the network.
- **History management** is achieved by saving state snapshots and user actions in a database.

## Project store structure
The project logic is implemented in the `/src/store/core` folder. The core of the application exports only:

- the project reducer,
- saga,
- selectors.

The `/src/store/core` folder **does not contain any information about the client or backend**, which allows the code to
be cross-platform — it can be used both on the frontend and the backend.

For example, the /src/store/client and /src/store/server folders implement their own versions of stores adapted for various tasks.

## Redux usage conventions

- Each reducer is responsible for managing a **single** field (`nodes` or `edges`). There are no
shared reducers.
- **Sagas** are used to implement connections between stores.
- Each action is processed by a **single handler** — either a saga or a reducer.
- **Minimal payload** is used for actions — only the entity's `id`, without passing entire objects.
- Each saga is responsible for implementing a specific relation between different stores.

### Example
A complex action, such as deleting a node, requires:

- deleting the node itself from the store,
- deleting the edges associated with it,
- deleting child nodes.

An example of a saga implementing this:
```typescript
function* deleteNode({ payload: { id  } }) {
   const nodes: Node[] = yield select(nodesSelector);
   const dependentNodes = getDependents(nodes, id);

   yield put(EdgeActions.deleteBy({ ids: dependentNodes }));
   yield put(NodesActions.delete({ ids: dependentNodes }));
}
```

## Frontend application structure

Previously, in the article [DI in React](https://github.com/AdorableRedPanda/di-react-redux), I described some challenges
that arise when using `Redux` in `React` components. This application can be considered an example of isolating the use
of the store from `React` components.

The client-side implementation of the store is described in `/src/store/client`. Since this is a demo project, 
the `Redux` store is used to record a user actions to save history. **Sagas** are used to handle global actions — 
fixing changes in history (in a real project, this would be a request to the backend).

The `/src/store/client` folder contains logic related to `React`. Only providers and hooks are exported, wrapping the 
usage of selectors and actions. The purpose of these hooks is to isolate components from direct interaction with the store.

## Reusability and flexibility

In the current project implementation, it is possible to **completely replace** the store implementation:

- Switch to another state manager.
- Move heavy reducers to a **Service Worker**.
- Completely transfer state management to the **backend**.

At the same time, the `React` component code will remain **unchanged**, making the architecture flexible and easily adaptable to various tasks.

## Development
To start app in development mode:
- Download [source code](https://github.com/AdorableRedPanda/redux-structure-demo)
- Install dependencies `npm i`
- Run dev-server `npm run dev`

The application will be served at `localhost:8080`


