from node:14-alpine

WORKDIR /app
<<<<<<< HEAD
COPY . /app

RUN npm install
RUN npm run test-dev
=======

COPY . /app

RUN npm install

RUN npm run test-dev

>>>>>>> main
CMD npm run test-dev