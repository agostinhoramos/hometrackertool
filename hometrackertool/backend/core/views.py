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
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response
    return JsonResponse({})


def ProfilesActivityView(request):
    if request.method == 'GET':
        params = request.body
        print( 
            params
        )
        data = [
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
        ]
        response = JsonResponse(data, safe=False)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response
    return JsonResponse({})