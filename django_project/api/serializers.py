from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username','password','repeat password','email')
        more_kwargs={'password':{'write_only':True , 'required':True}}
    def create(self, validated_data):
        user=User.objects.create_user(**validated_data)
        return user
