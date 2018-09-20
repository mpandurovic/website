FROM node:8.12-alpine
MAINTAINER Marko Pandurovic "marko.pandurovic.dev@gmail.com"

WORKDIR /var/www/website
COPY . /var/www/website/

RUN npm install && npm run build