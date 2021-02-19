FROM node:carbon-alpine
RUN mkdir app 
ADD . /app
WORKDIR /app/
RUN npm ci
CMD node src