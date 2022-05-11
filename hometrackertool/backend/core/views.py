from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
import io, jwt, sys, datetime, json, math

from .models import *
from .serializers import *

# from dotenv import dotenv_values
# _env = dotenv_values(".env.local")
# sys.path.append( _env["ROOT_PATH"] )

def ProfilesView(request):
    if request.method == 'GET':
        profile = Profile.objects.all()
        serializer = EntityProfileSerializer(profile, many=True)
        response = JsonResponse(serializer.data, safe=False)
        return response
    return JsonResponse({})


def ProfilesActivityView(request):
    if request.method == 'GET':
        params = request.content_params
        print( 
            params
        )
        data = {
            "row" : [
                {
                    "id": 1,
                    "name": 'Agostinho Ramos',
                    "href": '#',
                    "mac_address": '24:11:45:E5:5B:F9',
                    "status": 'inside',
                    "date": 'July 11, 2020',
                    "datetime": '2020-07-11',
                },
                {
                    "id": 2,
                    "name": 'Protásio Pina',
                    "href": '#',
                    "mac_address": '86:05:34:FA:B5:30',
                    "status": 'Pending',
                    "date": 'July 11, 2020',
                    "datetime": '2020-07-11',
                }
            ],
            "totalRow" : 23,
            "index" : 1,
            "limit" : 10
        }

        for _ in range(0, 8):
            data["row"].append( data["row"][1] )

        response = JsonResponse(data, safe=False)
        return response
    return JsonResponse({})

def OverviewView(request):
    if request.method == 'GET':
        data = {
            "inside" : 4,
            "outside" : 3,
            "pending" : 1,
        }
        response = JsonResponse(data, safe=False)
        return response