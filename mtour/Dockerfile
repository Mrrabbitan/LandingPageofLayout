### stage: build ###
FROM node:8.16.2-alpine AS build

WORKDIR /

COPY package.json yarn.lock ./

RUN yarn install 

COPY / /

RUN yarn build

### stage: app ###
FROM nginx:1.15-alpine AS app

LABEL maintainer="ZengPing An<anzengping@momenta.ai>"

LABEL app=panoWebsite

COPY nginx/ /etc/nginx/

COPY build/ /usr/share/nginx/html

EXPOSE 80
