#!/bin/bash

service_name="hometrackertool";
myApp_name="main.py"

myApp_path="/var/opt/$service_name/"
myApp_full_path="$myApp_path$myApp_name";
service_path="/etc/systemd/system/$service_name.service";
VIRTUAL_ENV="~/.cache/pypoetry/virtualenvs/hometrackertool-*/bin/activate"; # Poetry

sudo chmod +x $myApp_full_path;
sudo rm -rf $service_path;

{
    echo "[Unit]"
    echo "Description=HomeTrackerTool startup"
    #echo "After=network.target"
    echo ""
    echo "[Service]"
    echo "Type=idle"
    echo "Restart=on-failure"
    echo "User=master"
    echo "WorkingDirectory=$myApp_path"
    echo "ExecStart=/bin/bash -c '. $VIRTUAL_ENV && python $myApp_name'"
    echo ""
    echo "[Install]"
    echo "WantedBy=multi-user.target"
} > $service_path;

sudo chmod 644 $myApp_full_path;
sudo systemctl daemon-reload;
sudo systemctl enable "$service_name.service";
sudo systemctl status "$service_name.service";

# disable a service
#sudo systemctl disable hometrackertool.service
# reload a service
#sudo systemctl status hometrackertool.service