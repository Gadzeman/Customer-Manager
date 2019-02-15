# Build a blog using Nest.js, React.js and MongoDB

Application repo for a customer list management application built with Nest.js, Vue.js and MongoDB.

## Getting Started
This prototype is divided into two separate sections. Namely the Backend ( Built with Nest.js) and the frontend
( Built with React.js ).

### Clone the repository
To easily set up the application, clone this repository which contains directory for both sections of the project ( i.e `customer-list-app-backend` and `customer-list-app-frontend-react`)

```bash
git clone https://github.com/yemiwebby/nest-react-customer-app.git
```

## Change directory into the newly cloned project
```bash
cd nest-react-customer-app
```

## Backend
### Change directory into the backend
```bash
cd customer-list-app-backend
```

### Install backend dependencies

```bash
npm install
```

### MongoDB
Ensure that you have mongoDB installed on your machine before running the application. I have this fully setup on my mac already.

Start mongoDB:

```bash
sudo mongod
```

### Run the application
Open another terminal and still within the `customer-list-app-backend` project directory run the application with:

```bash
npm run start
```

This will start the backend application on port `5000`.

## Frontend
Open another terminal from the `nest-react-customer-list-app` and navigate to the `customer-list-app-frontend-react` folder to setup the frontend

### Frontend dependencies
```bash
cd customer-list-app-frontend-react
npm install
```

### Run the frontend app

```bash
npm run serve
```

### Test the application
Finally open your browser and view the application on http://localhost:3000

## Prerequisites
 [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/), [MongoDB](https://docs.mongodb.com/v3.2/installation/)

## Built With
[Nest.js](https://nestjs.com/)
[React.js](https://reactjs.org/)
[MongoDB]() 