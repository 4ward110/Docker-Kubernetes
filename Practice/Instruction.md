### 1. Setup
#### Firstly you need to setup your VM and Docker on your VM
- You can setup your Linux virtual machine on VMware or Virtualbox or on some hypervisor you like
- To setup docker you can follow this link [How to install Docker](https://docs.docker.com/engine/install/)
#### Get wordpress image and Mariadb image
Get Wordpress image and Maria Image created by binami on docker hub.[Docker hub registry](https://hub.docker.com/r/bitnami/wordpress)
  - Download Wordpress image:
> $ docker pull bitnami/wordpress:latest
  - To use a specific version, you can pull a versioned tag. You can view [the list of available versions](https://hub.docker.com/r/bitnami/wordpress) in the Docker Hub Registry.
> $ docker pull bitnami/wordpress:[TAG] 

### 2 Practice
### Practice 1: Deploy Docker with command line.

#### Step 1: Create a network:
> $ docker network create wordpress-network
#### Step 2: Create a volume for MariaDB persistence
> $ docker volume create --name mariadb_data
#### Step 3: Create your Mariadb:
> $ docker run -d --name mariadb \
  --env ALLOW_EMPTY_PASSWORD=yes \
  --env MARIADB_USER=bn_wordpress \
  --env MARIADB_PASSWORD=bitnami \
  --env MARIADB_DATABASE=bitnami_wordpress \
  --network wordpress-network \
  --volume mariadb_data:/bitnami/mariadb \
  bitnami/mariadb:latest
  
**Note**: Make sure you have downloaded mariadb image.
