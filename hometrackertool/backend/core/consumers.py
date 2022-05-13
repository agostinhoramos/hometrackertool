import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync


class ChannelConsumer(WebsocketConsumer):
    def connect(self):
        self.channel_id = self.scope['url_route']['kwargs']['channel_id']
        self.channel_group_id = 'channel_' + str(channel_id)
        async_to_sync(self.channel_layer.group_add)(self.channel_group_id, self.channel_name)
        self.accept()
    
    def disconnect(self):
        async_to_sync(self.channel_layer.group_discard)(self.channel_group_id, self.channel_name)
    
    def receive(self,  text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        async_to_sync(self.channel_layer.group_send)(self.channel_group_id, {'message':message, 'type':'send_back'})
    
    def send_back(self, event):
        message = event['message']
        self.send(text_data=json_dumps({'message':message}))