FROM node:latest
WORKDIR /home/node/project
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [ "npm" ]
CMD [ "start" ]