# Use an official node image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app when the container launches
CMD ["npm", "start"]
