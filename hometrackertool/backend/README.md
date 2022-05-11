poetry shell
cd hometrackertool/backend/
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 1333


u: master
e: master@hometrackertool.local
p: over1234