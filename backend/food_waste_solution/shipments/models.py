from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Shipment(models.Model):
    seller = models.ForeignKey(get_user_model(), models.SET_NULL, null=True)
    primary_img_url = models.CharField(max_length=255, null=True)