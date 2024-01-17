FROM node:alpine3.18 as builder 

WORKDIR /app

COPY package*.json ./

COPY yarn*.lock ./

COPY src ./src

RUN yarn install

COPY tsconfig.json ./

COPY tsconfig.node.json ./

COPY vite.config.ts ./

COPY tailwind.config.js ./

COPY postcss.config.js ./

COPY index.html ./index.html

RUN yarn build 

FROM alpine:3.19 as final

RUN apk add --no-cache --update nginx

WORKDIR /app

COPY public ./public

COPY --from=builder /app/dist ./

COPY nginx/nginx.conf /etc/nginx/http.d/default.conf


CMD [ "nginx", "-g", "daemon off;" ]