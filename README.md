A simple MERN stack application

This project demonstrates a Dockerized MERN Stack application consisting of:

React frontend

Node.js + Express backend

MongoDB database

All services run in Docker containers.

Create a network for the docker containers
docker network create mern
Build the client
cd mern/frontend
docker build -t mern-frontend .
Run the client
docker run --name=frontend --network=mern -d -p 5173:5173 mern-frontend
Verify the client is running

Open your browser and type

http://localhost:5173
Run the mongodb container
docker run --network=mern --name mongodb -d -p 27017:27017 -v ~/opt/data:/data/db mongo:latest
Build the server
cd ../backend
docker build -t mern-backend .
Run the server
docker run --name=backend --network=mern -d -p 5050:5050 mern-backend
Verify the backend is running

Open your browser

http://localhost:5050

You may see:

Cannot GET /

This is normal because the backend exposes only API routes.

Using Docker Compose

You can run the full MERN stack using Docker Compose.

Start all services
docker compose up -d
Verify running containers
docker ps

You should see:

frontend
backend
mongodb
Application URLs

Frontend

http://localhost:5173

Backend

http://localhost:5050

MongoDB

mongodb://localhost:27017
