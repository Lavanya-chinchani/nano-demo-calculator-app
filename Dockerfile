FROM node:latest

WORKDIR /home/data

COPY . .

RUN npm install

EXPOSE 8082

ENTRYPOINT ["node", "server.js"]