# Course Game

---

Server for the Course Game project for Software Engineering course. DA-IICT.
The frontend code is [https://github.com/Kartikeya99/course-game-frontend](https://github.com/Kartikeya99/course-game-frontend).

## Usage

---

This is a standard nodejs application that makes use of express as a framework with mongodb as database.

Download and install [NodeJS](https://nodejs.org/en/).

Please have a mongodb server running in the background. You can follow instructions [here](https://docs.mongodb.com/manual/administration/install-community/) to download and install it.

Run the mongo server on port `27018` by running (on linux):
`mongod --port 27018`

Run the following commands to set the server up:

```
git clone https://github.com/Kartikeya99/course-game-backend.git
cd course-game-backend
npm install
```

To run it in development mode so as to track changes and auto reload, use:

```
npm run dev
```

For production, use:

```
npm run prod
```

And you should have the server running on port `1916`
