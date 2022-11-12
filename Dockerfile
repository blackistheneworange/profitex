#latest nodejs version to use
FROM node:16

#Create app directory
WORKDIR /usr/src/app/profitex

# Install app dependencies
# where available (npm@5+)
COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN apt-get update

# Bundle app source
COPY . .

# Perform client build
RUN npm run build

#Expose server port
EXPOSE 3000

#Start server
CMD [ "npm", "start" ]