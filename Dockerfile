ARG NODE_VERSION=16

#==============================================================================#
# "build" stage
#==============================================================================#
FROM node:14-alpine AS build
WORKDIR /code
COPY . .
RUN npm install
RUN npm run build

#==============================================================================#
# "app" stage
#==============================================================================#
FROM socialengine/nginx-spa AS app
WORKDIR /app
COPY --from=build /code/dist .
