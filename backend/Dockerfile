FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5050
CMD ["npm", "start"]


#docker build -t mern-backend .
#docker run --network=mern --name=backend-c1 -d -p 5050:5050 mern-backend
 