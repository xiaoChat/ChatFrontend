FROM nginx:1.18.0

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./dist /www

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]