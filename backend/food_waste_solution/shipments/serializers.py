from rest_framework.serializers import ModelSerializer
from . import models

class ShipmentSerializer(ModelSerializer):
    class Meta:
        model = models.Shipment
        fields = ('primary_img_url',)
        read_only_fields = ('primary_img_url',)
