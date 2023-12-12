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
EXPOSE 3000

# Build the Next.js application
RUN npm run build

# Start the Next.js app
CMD ["npm", "start"]
