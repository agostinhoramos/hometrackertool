# Home Tracker Tool

## How to install
- ~$ cd /var/opt/
- /var/opt/$ sudo apt install git && sudo git clone https://github.com/agostinhoramos/hometrackertool.git
- /var/opt/$ sudo chown -R $USER:$USER ../opt/
- /var/opt/$ cd /var/opt/hometrackertool/install
- /var/opt/hometrackertool/install$ . setup.sh


## Getting start
- /var/opt/$ cd /var/opt/hometrackertool
- /var/opt/hometrackertool$ poetry shell
- /var/opt/hometrackertool$ poetry install
- /var/opt/hometrackertool$ cd hometrackertool/frontend
- /var/opt/hometrackertool/hometrackertool/frontend$ npm install
- /var/opt/$ cd /var/opt/hometrackertool
- /var/opt/hometrackertool$ . start.sh

## Tecnologies:
- NodeJS 14.x
- Python 3.7
- Django 3.2