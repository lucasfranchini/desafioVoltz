# voltz API

An API made for voltz company challenge.

If you want to test the API routes without dowloading the repository there's a deploy in: \
https://voltz-challenge-ocllxiksya-uc.a.run.app

## About

This is an api with routes to get data from tools from a database, lots of people can view and save new tools and it's tags.\
Below are the implemented features:

- list all tools
- Add new tool in database
- remove a tool from your data

By using this app any user can list and manage the database tools.

## available routes

- GET /tools
- POST /tools
- DELETE /tools/{id}


## Technologies

The following tools and frameworks were used in the construction of the project:<br>

<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=whiteE'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"/>
  
</p>

## How to run

1. Clone this repository
2. install docker and docker-compose in your machine
3. create a .env like .env.example with your mongo database values and the port that you want to run the API
4. run your API using the command:

```
make dev
```

5. Finally call http://localhost:3000/routename changing 'routename' for the route you wanna call.

obs: the env `DATABASE_URL` uses the format:

```
 mongodb://username:password@host:port/database
```

where `host` and `port` are fixed values defined in docker-compose and `username` and `password` are the same values used in the environment variables `MONGODB_USER` and `MONGODB_PASSWORD`.

`host` is the name of the docker database container (mongodb) and `port` is the internal database port used (27017)

## How to run tests

1. Clone this repository
2. install docker and docker-compose in your machine
3. don't alter the .env.test
4. run test cases using the command:

```
make test
```

obs: the env `DATABASE_URL` uses the format:

```
 mongodb://username:password@host:port/database
```

where `host` and `port` are fixed values defined in docker-compose and `username` and `password` are the same values used in the environment variables `MONGODB_USER` and `MONGODB_PASSWORD`.

`host` is the name of the docker database container (mongodb_test) and `port` is the internal database port used (27017)

## scripts to make life easier

- `make dev` : runs the back-end in development mode using docker, watching file changes. It will show the logs in your terminal.
- `make dev-detached` : runs the back-end in development mode using docker, watching file changes. The docker container will be detached from your terminal.
- `make dev-down` : stop and remove the docker containers created with 'make dev' or 'make dev-detached'.
- `make test` : build and run the back-end in test mode using docker, run the tests file and stop and remove the containers right after the tests are finished.
- `make test-build` : build your project and database in docker containers to use the tests.
- `make test-down` : stop and remove the docker containers created with 'make test' or 'make test-build'.
