#!/bin/bash
NAME="hometrackertool"
HOSTNAME=$NAME".local"
PORT=1333

CPATH="/etc/apache2/sites-available/"
CONF_FILE=$CPATH"$NAME.conf"

cd $CPATH
sudo rm -rf $CONF_FILE
sudo chown $USER:$USER $CPATH

{
    echo "<VirtualHost *:80>"
    echo "   ServerName $HOSTNAME"
    echo "   ServerAlias $HOSTNAME"
    echo "   ServerAdmin webmaster@$HOSTNAME"
    echo "   RewriteEngine On"
    echo "   RewriteCond %{HTTP:Upgrade} =websocket [NC]"
    echo "   RewriteRule /(.*)            ws://127.0.0.1:$PORT/""$""1 [P,L]"
    echo "   RewriteCond %{HTTP:Upgrade} !=websocket [NC]"
    echo "   RewriteRule /(.*)            http://127.0.0.1:$PORT/""$""1 [P,L]"
    echo "   ProxyPassReverse / http://127.0.0.1:$PORT/"
    echo "</VirtualHost>"
} > $CONF_FILE

sudo a2dissite 000-default.conf
sudo a2ensite "$NAME.conf"
sudo systemctl restart apache2
sudo systemctl status apache2