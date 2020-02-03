# Todo App

(Note: this app was developed using Node version 12)

## How to run the app (with Docker)

Before running the app, please make sure you have `git`, `docker`, `docker-compose`, and `node js` installed on your system.

- Then clone the app to a local directory:

  `git clone https://github.com/Bhanukamax/vc-todo-app.git`

- cd in to the directory:

  `cd vc-todo-app`

- run the `run.sh` file to get the app running
  
  `sh run.sh` 
  
## How to run the app (without Docker)

Before running the app, please make sure you have `git`, `mongodb`, and `node js` installed on your system.

- Then clone the app to a local directory:

  `git clone https://github.com/Bhanukamax/vc-todo-app.git`

- cd in to the directory:

  `cd vc-todo-app`

**Backend**

- cd into `api` directory from the app root

  `cd api`
  
- open `.env` file and make sure the mongo db url is matching your local mongodb connection 

- install dependencies

  `npm install`
  
- start the backend
   `npm run start`
   
 **Frontend**
 - cd into `api` directory from the app root

  `cd app`

- install dependencies

  `npm install`
  
- start the backend
   `npm run start`

 ## How to use
 
 once the app is built an running:
 
 the graphiql interface will be available via the following url:
 
 [http://localhost:6002/graphql](http://localhost:6002/graphql)

App will be available on the port `:3000`:

[http://localhost:3000](http://localhost:3000)



 
