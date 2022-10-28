


# You can build and run this with
#  docker build -t automl-labeling-tool
#  docker run -p 5000:5000 -t automl-labeling-tool
# Go to port 5000 on localhost to see.
from node:alpine
WORKDIR /app

RUN npm install pm2 -g

COPY browser/package*.json /app/browser/
COPY server/package*.json /app/server/

WORKDIR /app/browser
RUN npm install

WORKDIR /app/server
RUN npm install

WORKDIR /app
COPY . .

WORKDIR /app/browser
RUN npm run build --prod
RUN npm run-script build

WORKDIR /app/server
EXPOSE 5000
CMD ["pm2-runtime", "server.js"]