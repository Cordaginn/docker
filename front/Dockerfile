FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [ "npm" ]
CMD [ "start" ]
