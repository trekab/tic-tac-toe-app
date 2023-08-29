FROM node:20-alpine

COPY package.json /tic-tac-toe/
COPY . /tic-tac-toe/

WORKDIR /tic-tac-toe

RUN npm install

CMD ["npm", "start"]