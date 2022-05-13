#!/bin/bash

sudo apt update && sudo apt upgrade
sudo rm -rf /tmp/*
cd /tmp/

# Install Poetry
if [ $enable_python_poetry -ge 1 ]; then
    curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
    source $HOME/.poetry/env
fi                                                                                                                                                                       

# Install Redis
if [ $enable_redis -ge 1 ]; then
    curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
    sudo apt-get update
    sudo apt-get install redis
    sleep 1
    redis-server
fi

# Install nmap
if [ $enable_nmap -ge 1 ]; then
    sudo apt install nmap
    sudo apt update && sudo apt upgrade
    sudo apt install python3-pip
    sudo apt update
    sudo pip install python-nmap
    sleep 1
fi

# Install Mosquitto Server
if [ $enable_mosquitto_server -ge 1 ]; then
    sudo apt update
    sudo apt install mosquitto -y
    sudo systemctl status mosquitto
    #sudo systemctl stop mosquitto
    #sudo systemctl start mosquitto
    sudo systemctl restart mosquitto
    source /var/opt/htt_auto_install/conf_mosquitto.sh
    sleep 1
fi

# Install PostgreSQL 12 Server
if [ $enable_postgresql -ge 1 ]; then
    sudo apt install -y wget
    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
    RELEASE=$(lsb_release -cs)
    echo "deb http://apt.postgresql.org/pub/repos/apt/ ${RELEASE}"-pgdg main | sudo tee  /etc/apt/sources.list.d/pgdg.list
    sudo apt update
    sudo apt -y install postgresql-12
    sudo service postgresql start
    sudo service postgresql status
    source /var/opt/htt_auto_install/conf_postgres.sh
    sleep 1
fi

# Install NodeJS
if [ $enable_nodejs -ge 1 ]; then
    sudo apt update
    curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt-get install -y nodejs
    node -v
fi

# Install NPM and React
if [ $enable_nodejs_npm -ge 1 ]; then
    sudo apt update
    sudo apt install npm -y
    sudo npm -g install create-react-app
fi

# Install apache2
if [ $enable_apache2 -ge 1 ]; then
    sudo apt update
    sudo apt purge apache2 -y
    sudo apt install apache2 -y
    sudo ufw allow 'Apache'
    sudo systemctl restart apache2
    sudo ufw status
    sudo systemctl status apache2

    sudo a2enmod ssl
    sudo a2enmod lbmethod_byrequests
    sudo a2enmod rewrite
    sudo a2enmod deflate
    sudo a2enmod headers
    sudo a2enmod proxy
    sudo a2enmod proxy_http
    sudo a2enmod proxy_ajp
    sudo a2enmod proxy_connect
    sudo a2enmod proxy_balancer
    sudo a2enmod proxy_html

    source /var/opt/hometrackertool/install/conf_apache.sh
    sleep 1
fi

# Install others
sudo pip install python-dotenv

cd /var/opt/hometrackertool