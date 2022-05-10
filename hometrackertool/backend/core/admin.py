from django.contrib import admin
from .models import Device, Profile

class DeviceAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'priority','created_on')
    list_filter = ("type",)
    search_fields = ['name', 'content']

admin.site.register(Device, DeviceAdmin)


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'device_fk','created_on')
    list_filter = ("status",)
    search_fields = ['name', 'content']

admin.site.register(Profile, ProfileAdmin)