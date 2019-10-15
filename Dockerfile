###############################################################################
# Step 1 : Builder image
#
FROM node:10-alpine AS builder

# Define working directory and copy source
WORKDIR /home/node/app
COPY . .
# Install dependencies and build whatever you have to build
# (babel, grunt, webpack, etc.)
RUN npm install --silent && node node_modules/@quasar/app/bin/quasar-build -m ssr

###############################################################################
# Step 2 : Run image
#
FROM node:10-alpine

WORKDIR /home/node/app

COPY --from=builder /home/node/app/dist/ssr .

ENV NODE_ENV=production

# Install deps for production only
RUN npm install --silent && npm cache clean --force

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3000

# Start the app
CMD  npm start