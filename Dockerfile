from node:alpine as builder
WORKDIR /app
COPY browser/package*.json /app/browser/

WORKDIR /app/browser
RUN npm install

WORKDIR /app
COPY . .

WORKDIR /app/browser
RUN npm run build --omit=dev


### Multistage build
FROM python:3.8-slim-buster

WORKDIR /app
COPY server/requirements*.txt /app/server/

WORKDIR /app/server
RUN pip3 install -r requirements.txt

WORKDIR /app
COPY . .

WORKDIR /app/server
EXPOSE 5000
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]