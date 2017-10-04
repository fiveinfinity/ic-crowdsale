FROM node:8-alpine
RUN npm install -g http-server
WORKDIR /srv/app
COPY ./ /srv/app
CMD http-server ./dist