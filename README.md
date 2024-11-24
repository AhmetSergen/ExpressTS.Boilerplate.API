# ExpressTS.Boilerplate.API

## Project Installation
(Initial project is installed with these commands)
npm init -y
npm install --save-dev @types/cors
npm install express body-parser cors
npm install --save-dev typescript ts-node @types/node @types/express @types/cors

## After Installation
### Run With npm scripts
npm start

### Run Project (Without compile):
npx ts-node src/app.ts

### Run Project (With compile):
npx tsc
node dist/app.js

### HTTP Requests:
(GET) /api/users - Fetch all users
(GET) /api/users/:id - Fetch a specific user by ID
(POST) /api/users - Create a new user
(PUT) /api/users/:id - Update an existing user
(DELETE) /api/users/:id - Delete a user
