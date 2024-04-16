# Use the official Node.js 14 image.
# https://hub.docker.com/_/node
ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-alpine

# Create app directory.
WORKDIR /app

# Install app dependencies.
COPY package*.json ./

RUN npm install

# Bundle app source.
COPY . .

# Install Vite if not already installed.
RUN [ ! -d node_modules/.bin/vite ] && npm install -g vite

# Build app for production with minification.
# RUN npm run build

EXPOSE 3000
# Serve the optimized production app.
CMD npm run dev