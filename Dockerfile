FROM node:6
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]

# docker run -p 8080:8080 --name vdv_container_2 -d vdv_image