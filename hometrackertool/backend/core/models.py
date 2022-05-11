from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import User

def tupleChoices(i, t):
    for d in t:
        if d[0] == i:
            return d[1]
    return None

class MacAddress(models.Model):
    TYPE = (
        (1,"WIFI"),
        (2,"BLE"),
        (0,"OTHER"),
    )
    mac = models.CharField(max_length=20, unique=True)
    type = models.IntegerField(choices=TYPE, default=1)
    updated_on = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.updated_on = now()
            self.created_at = now()
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.mac

class Device(models.Model):
    TYPE = (
        (1,"MOBILE"),
        (2,"TABLE"),
        (3,"PORTABLE"),
        (4,"DESKTOP"),
        (0,"OTHER"),
    )
    name = models.CharField(max_length=200)
    type = models.IntegerField(choices=TYPE, default=1)
    model = models.CharField(max_length=150)
    manufacturer = models.CharField(max_length=150)
    mac_address_fk = models.ForeignKey(MacAddress, on_delete=models.CASCADE)
    updated_on = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.updated_on = now()
            self.created_at = now()
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name

class Profile(models.Model):
    STATUS = (
        (0,"OUTSIDE"),
        (1,"INSIDE"),
        (2,"PENDING"),
    )
    BOOLEAN = (
        (0,"FALSE"),
        (1,"TRUE"),
    )
    name = models.CharField(max_length=150)
    status = models.IntegerField(choices=STATUS, default=2)
    enable = models.IntegerField(choices=BOOLEAN, default=1)
    photo = models.CharField(max_length=550, blank=True, null=True)
    updated_on = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.updated_on = now()
            self.created_at = now()
        super().save(*args, **kwargs)
    
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name

class ProfileDevice(models.Model):
    PRIORITY = (
        (0,"LOW"),
        (1,"MEDIUM"),
        (2,"HIGH"),
    )
    priority = models.IntegerField(choices=PRIORITY, default=0)
    device_fk = models.ForeignKey(Device, on_delete=models.CASCADE)
    profile_fk = models.ForeignKey(Profile, on_delete=models.CASCADE)

    updated_on = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.updated_on = now()
            self.created_at = now()
        super().save(*args, **kwargs)

    def __str__(self):
        return "{} : {} -> {}".format(self.profile_fk, self.device_fk, tupleChoices(self.priority, self.PRIORITY))