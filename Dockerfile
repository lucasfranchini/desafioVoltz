FROM node:16
WORKDIR /src
COPY package.json .
RUN npm install
COPY nodemon.json .
COPY . .
CMD npm run dev