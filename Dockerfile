# build
# 12.18.3 LTS
FROM node:12.18.3-alpine as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production deploy
# 1.18.0 LTS
FROM nginx:1.18.0-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]