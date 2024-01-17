FROM node:alpine3.18 as builder 

WORKDIR /app

COPY package*.json ./

COPY yarn*.lock ./

COPY src ./src

COPY public ./public

COPY index.html ./

RUN yarn install

COPY tsconfig.json ./

COPY tsconfig.node.json ./

COPY vite.config.ts ./

COPY tailwind.config.js ./

COPY postcss.config.js ./

CMD [ "yarn", "start" ]