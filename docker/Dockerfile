FROM node:18-alpine
WORKDIR /usr/src/app
COPY app/devops-app-eventos/package*.json ./
RUN npm install --only=production
COPY app/devops-app-eventos/ .
EXPOSE 3000
CMD [ "node", "app.js" ]
