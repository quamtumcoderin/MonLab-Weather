FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_MQTT_URL
ARG VITE_MQTT_TOPIC

ENV VITE_MQTT_URL=$VITE_MQTT_URL
ENV VITE_MQTT_TOPIC=$VITE_MQTT_TOPIC

RUN npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]