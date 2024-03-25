FROM node:20.11-alpine3.18
WORKDIR /veris-fe/
COPY public/ /veris-fe/public
COPY src/ /veris-fe/src
COPY package.json /veris-fe/
COPY tsconfig.json /veris-fe/
RUN npm install
CMD ["npm", "start"]