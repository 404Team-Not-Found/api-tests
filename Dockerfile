from node:14-alpine 

WORKDIR /app

COPY . /app

RUN npm clean-install

RUN npm run test-dev

CMD npm run test-dev