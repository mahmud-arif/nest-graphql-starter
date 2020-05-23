FROM node:12

WORKDIR "/app"

COPY package.json package.json

RUN yarn
COPY . .