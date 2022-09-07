FROM node:latest
RUN mkdir /home/node/project
WORKDIR /home/node/project
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD [ "start" ]