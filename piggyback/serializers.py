from rest_framework import serializers
from piggyback.models import Pigdata


class PigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pigdata
        fields = '__all__'
