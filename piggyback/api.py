from piggyback.models import Pigdata
from rest_framework import viewsets
from .serializers import PigSerializer

# Pig Viewset


class PigViewSet(viewsets.ModelViewSet):
    queryset = Pigdata.objects.all()

    serializer_class = PigSerializer
