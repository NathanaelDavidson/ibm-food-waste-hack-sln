from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from django.contrib.auth.models import Group

class Command(BaseCommand):
    help = 'Generates default user groups and permissions for application'
    def handle(self, *args, **kwargs):
        buyer_group, b_created = Group.objects.get_or_create(name=settings.BUYER_GROUP_NAME)
        seller_group, s_created = Group.objects.get_or_create(name=settings.SELLER_GROUP_NAME)
        if (b_created):
            print('Buyer group created')
        else:
            print('Buyer group already exists')
        if (s_created):
            print('Seller group created')
        else:
            print('Seller group already exists')
