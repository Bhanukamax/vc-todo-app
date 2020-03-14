FROM node:12-alpine as builder
WORKDIR /app
COPY . .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm install
RUN npm run build


FROM nginx:alpine
COPY --from=builder /app/build/ /usr/share/nginx/html
EXPOSE 80
