# **English Platform**

## **Pre-requisites**

- [Node.js](https://nodejs.org/en/) (>= 18.15.0)
- [Git](https://git-scm.com/)

## **Installation**

```bash
git clone git@github.com:utm-platform/english-platform.git # Clone the repository
cd english-platform # Enter the repository
```

### Install dependencies

```bash
npm run install # Install the dependencies of the server and the client
```

### Environment variables

For now, the server is the only one that uses environment variables.

Create a `.env` file in the root of the repository and add the following variables:

```bash
# Server
PORT=5000 # Port where the server will run
DB_URI=mongodb://localhost:27017/english-platform # MongoDB URI
JWT_SECRET=secret # JWT secret
JWT_REFRESH_SECRET=secret2 # JWT refresh secret
NODE_ENV=development # Node environment
```

Create a `.env` file in the `client` folder and add the following variables:

```bash
# Client
NEXT_API_URL=http://localhost:5000 # URL of the server with same port as the .env file in the server
NEXTAUTH_SECRET=secret15 # NextAuth secret
```

## **Run the server**

```bash
npm run dev:server # Start the server in development mode
npm run build:server # Build the server for production
npm run start:server # Start the server in production mode
```

## **Run the client**

```bash
npm run dev:client # Start the client in development mode
npm run build:client # Build the client for production
npm run start:client # Start the client in production mode
```

## **Folder structure**

- `/client`: Here is the front-end code of the app.

  - `/public`: Contains the public files. Static files can be placed here (e.g. images, fonts, etc).
  - `/src`: Contains all the code of the app.
    - `/app`: Here is the index page of the app. You can add more pages here.
    - `/components`: Here are the components of the app. You can add more components here.

- `/src`: Contains the server code.
  - `/config`: The config is for defining the configuration variables.
  - `/controllers`: Controllers are responsible for handling the requests and responses.
  - `/middlewares`: Middlewares are responsible for handling the requests before they reach the controllers.
  - `/models`: Models are responsible for defining the schemas of the collections of the database.
  - `/routes`: Routes are responsible for defining the routes of the API.
  - `/services`: Services are responsible for handling the business logic.
  - `/utils`: The utils are responsible for defining utility functions.
  - `app.js`: Defines the express app.
  - `database.js`: Connects to the database.
  - `index.js`: The main file of the server. Here the server is started.
- `.env.example`: This file contains examples of the environment variables that the server uses.
- `.env` _(not included)_: This file is used to define the environment variables that the server uses.

## **Code Lifecycle**

### **Branches**

- `main`: Main branch, contains the latest stable version of the code. This branch is protected, so you can't push directly to it.
- `development`: Development branch, contains the latest version of the code.
- `feature/<feature-name>`: Branches for new features.
- `bugfix/<bug-name>`: Branches for bug fixes.

### **Pull Requests**

- Pull requests must be made from the `feature/<feature-name>` or `bugfix/<bug-name>` branches to the `development` branch.
- Pull requests must be reviewed and approved by at least one person before being merged.
- After a pull request is merged, the branch must be deleted.

### **Commits**

- Commits must be made from the `development` branch.
- Commits must be made in English.
- Commits must be made in the present tense.
- Commits must be made in the imperative mood.
- Commits must be made in the following format: `<type>: <message>`.

#### **Types**

- `feat`: New feature.
- `fix`: Bug fix.
- `docs`: Documentation.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: Changes that neither fix a bug nor add a feature.
- `perf`: Changes that improve performance.
- `test`: Adding missing tests.
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation.

#### **Examples**

- `feat: add new feature`
- `fix: fix bug`
- `docs: update README.md`
- `style: fix indentation`
- `refactor: refactor code`
- `perf: improve performance`
- `test: add new test`
- `chore: update dependencies`
