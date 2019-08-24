from rest_framework import permissions
from django.conf import settings

class BuyerPermission(permissions.BasePermission):
    message = 'User must have a buyer account to access this resource.'
    def has_permission(self, request, view):
        user = request.user
        return user and user.groups.filter(name=settings.BUYER_GROUP_NAME).exists()

class SellerPermission(permissions.BasePermission):
    message = 'User must have a seller account to access this resource.'
    def has_permission(self, request, view):
        user = request.user
        return user and user.groups.filter(name=settings.SELLER_GROUP_NAME).exists()
