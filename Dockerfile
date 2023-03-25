# Use Node.js  as the base image
FROM node

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the production-ready React app
RUN npm run build


# Set environment variables
# ENV REACT_APP_apiKey            = $REACT_APP_apiKey           
# ENV REACT_APP_authDomain        = $REACT_APP_authDomain       
# ENV REACT_APP_projectId         = $REACT_APP_projectId        
# ENV REACT_APP_storageBucket     = $REACT_APP_storageBucket    
# ENV REACT_APP_messagingSenderId = $REACT_APP_messagingSenderId
# ENV REACT_APP_appId             = $REACT_APP_appId            
# ENV REACT_APP_measurementId     = $REACT_APP_measurementId    

# Expose port 5000
EXPOSE 5000

# Start the app
CMD [ "npm", "start" ]
