# web-app

Simple app that have [Fizz-Buzz](https://en.wikipedia.org/wiki/Fizz_buzz) functionality

## Requirements

node 12
docker
minikube
hyperkit
kubectl
bash

##  Endpoints

`/` - default endpoint provides main functionality
`/app` - provides the same functionality as `/` but separate and on different endpoint
`/test` - just test endpoint

Other non existing endpoints returns `404` status

## Ports

Application performs on port 9999 locally

## Run on docker

1. Build
`docker build -t web-app .`

2. Run
`docker run --publish 8080:9999 --detach --name web-app web-app:latest`

3. Open browser at [localhost](http://localhost:8080)

4. Kill app
```
docker kill web-app
docker rm --force web-app
```

## Run on minikube
`./build-and-run.sh`
