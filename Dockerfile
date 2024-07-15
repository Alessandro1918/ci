FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

# TODO - figure it out why "RUN npm install" doesn't work here, and because of that I have to add "npm install" at the package.json script
# RUN npm install

COPY . .

CMD [ "npm", "run", "docker_dev" ]
