FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

# TODO - figure it out why I had to add "npm i" here and on the package.json script
RUN npm install   

COPY . .

CMD [ "npm", "run", "docker_dev" ]
