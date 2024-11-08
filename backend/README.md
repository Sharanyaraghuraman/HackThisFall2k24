# backend

Backend for the Mera Guide web application.

# Setups

Create an `.env` file in the `/backend` (current) directory and add the Mongo-DB connection url to the `MONGODB_URI` variable.

```sh
MONGODB_URI="connection url here"
# OPTIONAL, you can setup what port to run the server on.
PORT=1234
```

Alternatively you can set the environment variable directly.

**Running the server**

```sh
# use the package manager of your choice to install the dependencies, preferably yarn
yarn install
# run the src/index.js file
yarn dev
# format the code
yarn format
```

# Endpoints

| Type   | Endpoint                | Description                                  |
| ------ | ----------------------- | -------------------------------------------- |
| `GET`  | `/debug`                | health check.                                |
| `POST` | `/tourists`             | adds a tourist data to the database.         |
| `POST` | `/guides`               | adds a guide data to the database.           |
| `GET`  | `/tourists/:identifier` | get the tourist data using their identifier. |
| `get`  | `/guides/:idenfitifer`  | get the guide's data using their identifier. |
