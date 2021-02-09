### stage: build ###
FROM artifactory.momenta.works/docker/node:lts-alpine AS builder

WORKDIR /

COPY package.json yarn.lock ./

RUN yarn config set registry https://artifactory.momenta.works/artifactory/api/npm/npm/ \  

  && yarn install 

COPY . /

RUN yarn build

### stage: app ###
FROM nginx:1.15-alpine AS app

LABEL maintainer="ZengPing An<anzengping@momenta.ai>"

LABEL app=panoWebsite

COPY nginx/ /etc/nginx/

COPY --from=builder /build/ /usr/share/nginx/html

EXPOSE 80
