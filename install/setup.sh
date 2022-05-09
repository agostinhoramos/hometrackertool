#!/bin/bash

enable_python_poetry=1
enable_nmap=1
enable_mosquitto_server=1
enable_postgres=1
enable_nodejs=1
enable_nodejs_npm=1
enable_apache2=1

# install main programs
source ./essentials_programs.sh
source ./install_main.sh