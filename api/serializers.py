from rest_framework import serializers
from .models import Memes


class MemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Memes
        fields = '__all__'

