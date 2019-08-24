from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from rest_framework import serializers, status

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('name',)
        read_only_fields = ('name',)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('username', 'password', 'email')
        depth = 1
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return self.Meta.model.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user_types = [group.name for group in instance.groups.filter(name__in=settings.USER_TYPES)]
        if len(user_types) == 1:
            representation['type'] = user_types[0]
        return representation



        
'''
    def create(self, validated_data):
        username = validated_data.get('username')
        email = validated_data.get('email')
        password = validated_data.get('password')
        group_name = validated_data.get('group')
        user = self.Meta.model.objects.create_user(username, email, password)

'''
