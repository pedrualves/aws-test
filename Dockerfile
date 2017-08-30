FROM node:6
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]

# build image: docker build -t vdv_image .
# build container: docker run -p 8080:8080 --name vdv_container -d vdv_image