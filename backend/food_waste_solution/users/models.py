from django.contrib.auth.models import AbstractUser
from django.db import models

# Custom user model to replace built-in default
# https://docs.djangoproject.com/en/2.2/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project
class User(AbstractUser):
    pass

class Profile(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    company_name = models.CharField(max_length=100)
    industry = models.CharField(max_length=50)
