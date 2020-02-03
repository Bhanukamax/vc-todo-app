FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN mkdir -p node_modules
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
