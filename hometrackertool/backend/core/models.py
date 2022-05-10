from django.db import models
from django.contrib.auth.models import User

PRIORITY = (
    (0,"Main"),
    (1,"Other")
)

STATUS = (
    (0,"OUTSIDE"),
    (1,"INSIDE"),
    (2,"PENDING"),
)

class Device(models.Model):
    priority = models.IntegerField(choices=PRIORITY, default=0)
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    mac = models.CharField(max_length=20, unique=True)
    updated_on = models.DateTimeField(auto_now=True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.name

class Profile(models.Model):
    name = models.CharField(max_length=200)
    status = models.IntegerField(choices=STATUS, default=0)
    device_fk = models.ForeignKey(Device, on_delete=models.CASCADE)
    updated_on = models.DateTimeField(auto_now=True)
    created_on = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_on']
    def __str__(self):
        return self.name