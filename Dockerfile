# Use an official Node.js runtime as a parent image
FROM node:14.21.3

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app will run on
EXPOSE 6500

# Define the command to run your app
RUN npm run dev
