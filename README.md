<!-- deno-fmt-ignore-file -->
# Tasks-Deno
Simple REST / CRUD backend made with `Typescript`, `Deno`, `Oak` & `MongoDB`.  

---
# Getting started

1. Set up [Deno](https://deno.land/manual@v1.26.1/getting_started/installation) on your system.
2. Install MongoDB [locally](https://www.mongodb.com/try/download/community), or run a [docker image](https://hub.docker.com/_/mongo).
3. Create a new database and name it `deno-tasks` using [MongoDB Shell](https://www.mongodb.com/try/download/shell) or using [MongoDB Compass](https://www.mongodb.com/products/compass).
   - If using the CLI type: `mongosh mongodb://localhost:27017`[^1] to connect to the MongoDB instance.
   - Then type the command to create a new database: `use deno-tasks`.[^2]
   - Type the following command to create the data collection and insert a sample task:  
        `db.data.insert({ _id: new ObjectId(), entry: {title: "Sample task", body: "Hello world!" ,checked: false }, timestamp: Timestamp() })`.  
4. Clone this repository:  
        `git clone https://github.com/dariomrk/Tasks-Deno.git`.
5. To run the app type: `deno run server.ts --allow-read --allow-env --allow-net`.  
   If using VSCode press `Ctrl + Shift + P`, search for: `Tasks: Run Task` and then select: `deno: run`.  

---
# Debugging

- If using VSCode press `F5` to enjoy the integrated debugger.  

---
# Project structure

```
|
|-> ./controlers
|       Handle requests, interact with services and deliver responses
|
|-> ./database
|       Database client
|
|-> ./interfaces
|       Interface and Schema definitons
|
|-> ./services
|       Handle data
|
| ./router.ts
|       Register routes and controllers
|
| ./server.ts
|       App client
```
<!-- Footnotes -->
[^1]: Assuming default connection values. Take into consideration that you might have to alter the connection string.
[^2]: Assuming that there is no `.env` file and that the application is fallbacking to using `.env.defaults` DB_NAME value.