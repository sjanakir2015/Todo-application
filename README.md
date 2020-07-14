# Todo Application

Todo Application is easier way to track the list to be done.

Environment : 
Frontend : Angular .
Backend : NodeJS .
Datebase : MongoDB .

To run the application , Need to Start Node JS server and Run the Angular Server.

# Docker : 

To run the application in the Docker Deamon , need to Build the image using dockerfile .

Run the Image : docker run -p 4200:4200 <image-name>
  
  By giving the command : docker ps 
         - it list the number of containers running.
         
# Kubernetes:

Start "minkube start". 

First , Need to deploy the deploy.yaml.

Check the list of deployments by : kubectl get deployments .

Check the list of services by : kubecl get services .

To check the service in minikube :  minikube service <service-name> .
  
Check the Kubernetes Status : minikube status
