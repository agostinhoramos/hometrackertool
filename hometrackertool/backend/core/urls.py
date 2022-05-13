import sys

from django.urls import path
from django.urls.conf import include
from rest_framework import routers
from core.views import *

urlpatterns = [
    path('v1/profiles/', ProfilesView, name="ProfilesView"),
    path('v1/profiles/activity/', ProfilesActivityView, name="ProfilesActivityView"),
    path('v1/overview/', OverviewView, name="OverviewView"),
    path('v1/settings/', SettingsView, name="SettingsView"),
]