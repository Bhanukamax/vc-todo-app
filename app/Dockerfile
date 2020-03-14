FROM node:12-alpine as builder
WORKDIR /app
COPY . .
COPY package.json .
RUN yarn install
RUN yarn run build


FROM nginx:alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html
EXPOSE 80
