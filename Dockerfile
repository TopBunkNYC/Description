FROM node:8
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
RUN npm install pm2 -g

EXPOSE 7000
CMD ["pm2-runtime", "server/index.js"]