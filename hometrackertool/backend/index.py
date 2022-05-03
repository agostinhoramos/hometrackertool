#!/usr/bin/python3
import multiprocessing, time, json, sys, os

from dotenv import dotenv_values
_env = dotenv_values(".env.local")
sys.path.append( _env["ROOT_PATH"] )

def init(argv):
    if len(argv) > 0:
        pass
    os.system('python hometrackertool/backend/manage.py runserver 0.0.0.0:{}'.format(_env["SERVER_BACKEND_PORT"]))