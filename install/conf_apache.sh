#!/bin/bash

cd /etc/apache2/sites-available
sudo rm -rf /etc/apache2/sites-available/hometrackertool.conf
sudo chown $USER:$USER /etc/apache2/sites-available/
sudo cat /var/opt/hometrackertool/install/template/apache_hometrackertool.txt >> /etc/apache2/sites-available/hometrackertool.conf
sudo a2dissite 000-default.conf
sudo a2ensite hometrackertool.conf
sudo systemctl restart apache2
sudo systemctl status apache2