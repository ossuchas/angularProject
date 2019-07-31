FROM node:10.16.0-alpine

WORKDIR /home/ubuntu/src/app

RUN npm install -g @angular/cli 
COPY . .

#CMD ["python3", "app.py"]
# start app
CMD ng serve --host 0.0.0.0
