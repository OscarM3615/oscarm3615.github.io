---
title: 'Use Typescript with Node.js'
date: 'June 6, 2021'
tags:
  - nodejs
  - typescript
  - express
---

A simple guide on how to set up a Node.js and Express app using Typescript.

---

### What is Typescript?

Typescript is a **typed** superset of Javascript than can help to build and manage
large-scale Javascript projects. All Javascript code is also valid Typescript code.

### Why should I use Typescript?

Some benefits of using Typescript with Node.js applications are:

- Static typing
- Type inference
- Define interfaces

### Set up the project

#### Required tools

- Node.js
- Npm or yarn (yarn will be used in this article)

#### Process

Create a new directory for your project (for example, node-typescript) and open it:

```bash
mkdir node-typescript
cd node-typescript
```

Initialise a new node project with yarn:

```bash
yarn init -y
```

Install the required packages for the web server:

```bash
yarn add express cors morgan
```

Install the development dependencies (including Typescript):

```bash
yarn add --dev @types/express @types/cors @types/morgan typescript nodemon ts-node
```

Open the file `package.json` and modify the scripts section to include the following:

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "nodemon --config nodemon.json src/index.ts"
  }
}
```

Create a file called `nodemon.json` alongside `package.json` and put the following
config:

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/", "dist/"],
  "watch": ["src/"],
  "execMap": {
    "ts": "node -r ts-node/register"
  },
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,ts"
}
```

Now create a folder called `src` and inside it create a file `index.ts` with the
following content:

```typescript
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const PORT = process.env.PORT || 5000; // Read port from environment variables.

const app = express();

// Middleware
app.use(cors()); // Allows our app to be used from any client.
app.use(morgan('dev')); // Log the requests in console.
app.use(express.json()); // Parses requests body into json.

// Routes
app.get('/', (_req, res) => {
  res.json({
    message: 'Hello, world!'
  });
});

// Notify when server is ready.
app.listen(PORT, () => {
  console.log(`[i] Server listening at http://127.0.0.1:${PORT}...`);
});
```

To start the development server:

```bash
yarn run dev
```

To build and use for production:

```bash
yarn run build
yarn run start
```

_Using ts-node is not recommended for production for performance reasons, so we
transpile it to Javascript._

Opening <http://localhost:5000> in the browser will result in the following:

```json
{ "message": "Hello, world!" }
```

### Simple way to set up

Instead of typing the previous commands, clone the following repository:

```bash
git clone https://github.com/OscarM3615/typescript-api-boilerplate.git
```

Now you can use the following commands:

```bash
yarn run dev # For a development server
yarn run build # To transpile code to Javascript
yarn run start # For a production server
```
