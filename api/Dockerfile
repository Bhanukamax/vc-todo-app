FROM node:12-alpine
WORKDIR /usr/src/api
COPY package.json .
COPY package-lock.json .
RUN mkdir -p node_modules
RUN npm install
COPY . .
EXPOSE 6002
CMD ["npm", "run", "docker-start"]
