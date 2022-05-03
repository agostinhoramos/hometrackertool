#!/usr/bin/python3
import multiprocessing, time, json, sys, os

from dotenv import dotenv_values
_env = dotenv_values(".env.local")
sys.path.append( _env["ROOT_PATH"] )

def init(_arg):
    if _arg == 'PRD':
        os.system('npm run --prefix hometrackertool/frontend/ build')
        os.system('npm --prefix hometrackertool/frontend/ start')
    if _arg == 'DEV':
        os.system('npm --prefix hometrackertool/frontend/ start')
        