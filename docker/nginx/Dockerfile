FROM nginx:1.19.7-alpine

ENV TZ=Europe/Kiev
RUN apk add --update --no-cache tzdata

# RUN usermod -u 1000 nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
