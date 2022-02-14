FROM node:16
WORKDIR /usr/src/voltz-challenge
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:16
WORKDIR /usr/src/voltz-challenge
COPY package.json .
COPY package-lock.json .
RUN npm install --prod
COPY --from=build /usr/src/voltz-challenge/dist ./dist
EXPOSE ${NODE_LOCAL_PORT}
CMD npm run start
