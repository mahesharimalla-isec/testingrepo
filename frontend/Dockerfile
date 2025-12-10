
# Stage 1: Build
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]







# # Basic Dockerfile
#  FROM node:18.9.1

# # #Creating a /app directory to store everything in /app directory
#  WORKDIR /app

# # #Copy packaga.json directory to current directory
#  COPY package.json .

# # #Install all dependencies
#  RUN npm install    

# # #Complete source code of the frontend is copied into current directory
#  COPY . .

# # # Application is accessing on the port number of
#  EXPOSE 5050


# # #Execute the npm run dev from the package.json
#  CMD ["npm", "run", "dev"]










# this will work for only when nginx-frontend.conf in frontend directory
# Stage 1: Build React App
# FROM node:18.9.1 AS build

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Stage 2: Serve with NGINX
# FROM nginx:stable-alpine

# # Remove default nginx config
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy custom NGINX config
# COPY nginx-frontend.conf /etc/nginx/conf.d/default.conf

# # Copy built React app to NGINX's default serving directory
# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# 






# Command to build docker image: docker build -t mern .
# Command to run container: 
    # docker run --name=frontend --network=mern -d -p 5173:5173 mern-frontend
    # docker run --network=mern --name mongodb -d -p 27017:27017 -v ~/opt/data:/data/db mongo:latest