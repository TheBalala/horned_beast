FROM node:10.12.0-slim

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose a port, if your application listens on a specific port
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "start" ]