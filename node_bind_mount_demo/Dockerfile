FROM node

WORKDIR /web_dev/SanketSinghbackend/app/node-bind-mount-project

COPY . .

RUN npm ci

ENV PORT 3000

CMD ["npm", "start"]