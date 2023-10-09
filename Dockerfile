FROM node:12-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD [ "node", "./src/ecs-task.ts" ]


# docker build -t ecs-task .
# docker tag ecs-task:latest ACCOUNTID.dkr.ecr.ap-southeast-1.amazonaws.com/ecs-task:latest
# docker push ACCOUNTID.dkr.ecr.ap-southeast-1.amazonaws.com/ecs-task:latest