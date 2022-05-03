# Install base programs for Home Tracker Tool

## To Start:
- sudo apt install git -y
- cd /var/opt/
- sudo git clone https://github.com/agostinhoramos/htt_auto_install
- sudo chown $USER:$USER -R /var/opt/htt_auto_install
- cd /var/opt/htt_auto_install
- . setup.sh 

## Import RSA KEY
- ssh-keygen
- cat id_rsa.pub >> .ssh/authorized_keys

## Your git (Optional)
- git config --global user.name "Agostinho Ramos"
- git config --global user.email "agostinhopina095@gmail.com"
