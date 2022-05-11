from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import *

class EntityProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'name', 'status', 'enable', 'photo'
        ]