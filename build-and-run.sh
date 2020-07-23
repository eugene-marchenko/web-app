#!/bin/bash

minikube status
RESULT=$?
if [ $RESULT != 0 ]; then
  minikube start --driver=hyperkit
  minikube config set driver hyperkit
fi

npm install

#allow local images to be used by minikube
eval $(minikube docker-env)
docker stop registry
docker rm registry
docker build -t web-app .
docker run -d -p 5000:5000 --restart=always --name registry registry:2
docker tag web-app localhost:5000/web-app
docker push localhost:5000/web-app
kubectl apply -f k8s/resources.yaml
URL=$(minikube service -n application web-app --url)
echo "Open ${URL} in your browser"
