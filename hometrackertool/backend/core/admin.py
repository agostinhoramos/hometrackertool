from django.contrib import admin
from .models import MacAddress, Device, Profile, ProfileDevice

# class DeviceAdmin(admin.ModelAdmin):
#     list_display = ('name', 'type', 'priority','created_on')
#     list_filter = ("type",)
#     search_fields = ['name', 'content']

# class ProfileAdmin(admin.ModelAdmin):
#     list_display = ('name', 'status', 'device_fk','created_on')
#     list_filter = ("status",)
#     search_fields = ['name', 'content']

admin.site.register(MacAddress)
admin.site.register(Device)
admin.site.register(Profile)
admin.site.register(ProfileDevice)