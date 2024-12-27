FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json from the client directory
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire client directory to the container
COPY client/ ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
