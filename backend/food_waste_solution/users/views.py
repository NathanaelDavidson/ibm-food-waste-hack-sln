from django.conf import settings
from django.contrib.auth import get_user_model, logout
from django.contrib.auth.models import Group
from django.core.exceptions import ObjectDoesNotExist
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from food_waste_solution.blockchain_client import SellerClient, BuyerClient
from .serializers import UserSerializer


@method_decorator(csrf_exempt, name='dispatch')
class UserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        user_serializer = UserSerializer(data={
            'username': request.data.get('username'),
            'email': request.data.get('email'),
            'password': request.data.get('password')
        })
        user_serializer.is_valid(raise_exception=True)
        group_name = request.data.get('type')
        if group_name == 'seller':
            SellerClient.register_seller(request.data.get(
                'company'), request.data.get('industry'), request.data.get('product'))
        elif group_name == 'buyer':
            BuyerClient.register_buyer(request.data.get(
                'company'), request.data.get('industry'))
        else:
            return Response(status=400, data={'errors': user_serializer.errors})
        group = Group.objects.get(name=group_name)
        user = user_serializer.save()
        group.user_set.add(user)
        return Response(user_serializer.data)


@method_decorator(csrf_exempt, name='dispatch')
class UserDetail(APIView):
    def get(self, request, format=None):
        return Response(UserSerializer(request.user).data)


class UserLogin(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': UserSerializer(user).data
        })


@method_decorator(csrf_exempt, name='dispatch')
class UserLogout(APIView):
    def post(self, request):
        try:
            request.user.auth_token.delete()
        except (AttributeError, ObjectDoesNotExist):
            pass
        logout(request)
        return Response()
