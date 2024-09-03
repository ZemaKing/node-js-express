# Debugging and Development workflow

https://www.npmjs.com/package/nodemon

## Global Features vs Core Modules vs Third-Party Modules
You can basically differentiate between:

- **Global features**: Keywords like const or function but also some global objects like process
- **Core Node.js Modules**: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")
- **Third-party Modules**: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

Example:
`const fs = require('fs');`

You can now use the fs object exported by the "fs" module.

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example (which you don't need to understand yet - we'll cover this later in the course):

```js
// In terminal/ command prompt
npm install --save express-session
// In code file (e.g. app.js)
const sessions = require('express-session');
```

## Types of Errors

- Syntax Errors: 
- Runtime Errors: 
- Logical Errors: 

### Summary
- npm
  - npm stands for "Node Package Manager" and it allows you to manage your Node project and its dependencies
  - You can initialize a project with `npm init`
  - npm scripts can be defined in the `package.json` to give you shortcuts to common tasks, commands
- Types of Errors
  - Syntax, runtime and logical errors can break your app
  - Syntax and runtime errors throw (helpful) error messages (with line numbers!)
  - Logical errors can be fixed with testing and the help of the debugger
- 3rd Part Packages
  - Node projects typically  don't just use core modules and custom code but also third-party packages
  - You install them via npm
  - You can differentiate between production dependencies (--save), development dependencies (--save-dev) nd global dependencies (-g)
- Debugging
  - Use the VS Code Node debugger to step into your code and go through it step by step
  - Analyze variable values at runtime
  - Look into (and manipulate) variables at runtime
  - Set breakpoints cleverly (i.e. respect the async, event-driven nature)

## Express.js
Server Logic is Complex! You want to focus on your Business Logic, not on the nitty-gritty Details!

Use a Framework for the Heavy Lifting.

Alternatives to Express.js
- Vanilla Node.js
- Adonis.js
- Koa
- Sails.js

## Express.js

We'll write this code:

`module.exports = path.dirname(process.mainModule.filename);`

(I explain why we write this code in the next lecture when we write it!)

The important thing is that you might get a **deprecation warning** for that code - in that case, you can simply switch to this code:

`module.exports = path.dirname(require.main.filename);`

Quite straightforward :)
