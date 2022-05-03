#!/bin/bash

sudo apt update && sudo apt upgrade
sudo rm -rf /tmp/*
cd /tmp/

# Install Poetry
if [ $enable_python_poetry -ge 1 ]; then
    curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
    source $HOME/.poetry/env
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

if [ $enable_nodejs -ge 1 ]; then
    sudo apt update
    curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt-get install -y nodejs
    node -v
fi

if [ $enable_nodejs_npm -ge 1 ]; then
    sudo apt update
    sudo apt install npm -y
    sudo npm -g install create-react-app
fi

# Install others
sudo pip install python-dotenv

cd /var/opt/htt_auto_install