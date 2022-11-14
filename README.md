# Apollo Graphql Express Starter Configuration With Typescript

Create a new folder with name same as the project name then run the commands mentioned below:

```sh
npm init
npm install express apollo-server-express graphql mongoose dotenv apollo-server-core
npm install --save-dev nodemon ts-node typescript
npx tsc --init --rootDir src --outDir dist --lib dom,es6 --module commonjs --removeComments
mkdir src
touch src/app.ts
```

Now add the below block of scripts inside the package json file.

```yaml
{
  "prebuild": "rm -rf dist",
  "build": "npx tsc",
  "start": "ts-node ./src/app.ts",
  "start:prod": "npm run build && node ./dist/app.js",
  "start:nodemon": "./node_modules/nodemon/bin/nodemon.js",
}
```

Now add nodemon.json file in the root of project and add the json code mentioned below:

```yaml
{
  "ignore": [".git", "node_modules", "dist"],
  "watch": ["./src"],
  "exec": "npm run start",
  "ext": "ts",
}
```

Now you can copy the files from the repo to have a simple TODO list graphql apis with mongo DB.
