
#  vvw

Vue via Webpack. A project seed.



## Getting Started

Get this repository's latest content inside a new git repository using [degit](https://github.com/Rich-Harris/degit):

```
npx degit https://github.com/slacktracer/vvw.git --force
```

## What's inside?

### Vue, Vuex and Vue-Router

The very basics for a non-trivial Vue web application.

### Webpack + Babel

The [Webpack]([https://webpack.js.org/](https://webpack.js.org/)) module bundler uses the [Babel]([https://babeljs.io/](https://babeljs.io/))  compiler and the [Vue]([https://vuejs.org/](https://vuejs.org/)) framework loaders (and Babel uses the [TypeScript]([https://www.typescriptlang.org/](https://www.typescriptlang.org/)) preset) to allow us to use the latest and greatest JS/TS that will run in any browser of our choosing ([.browserlistrc]([https://github.com/browserslist/browserslist](https://github.com/browserslist/browserslist)))!

### There is something about testing

The project is ready to look for unit tests on `__unit-tests__` folders and run them using [Jest]([https://jestjs.io/](https://jestjs.io/))!

It is also ready to run end-to-end tests using [Cypress]([https://www.cypress.io/](https://www.cypress.io/)) from the `cypress/integration` folder (the default).

## `npm run ...`

These are (allegedly) the most important scripts inside package.json.

### For development

#### `npm start`

Starts everything in development mode.

### For testing

#### `npm test`

Runs unit tests using jest.

#### `npm run test:e2e`

Runs e2e tests using Cypress in terminal mode (`cypress run`).

### For checking

#### `npm run type-check`
#### `npm run format-check`
#### `npm run lint`

### For _push starting_ the CI/CD process

#### `npm run patch`

Updates the patch ([SemVer]([https://semver.org/](https://semver.org/))) number, commits, tags and pushes it to the repository.

## CI/CD using CircleCI

### [Project environment variables](https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project)

**`AWS_ACCESS_KEY_ID`**
**`AWS_REGION`**
**`AWS_SECRET_ACCESS_KEY`**

**`BUILDS_BUCKET`:**

The name of the bucket for all builds (staging, demo and production).

**`NODE_ENV`:**

It should be _production_. It's not related to the destination environment.

**`STAGING_BUCKET`**
**`STAGING_DIST_ID`:**

It will be used to create an invalidation on CloudFront after the latest staging files are copied to the staging bucket.

## NEXT!

Using [CircleCI contexts](https://circleci.com/docs/2.0/contexts/) to hold environment specific variables.
