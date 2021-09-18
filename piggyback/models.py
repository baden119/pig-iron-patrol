from django.db import models


class Pigdata(models.Model):
    name = models.CharField(max_length=100, unique=True)
    reputation = models.CharField(max_length=100)
    pignition_at = models.DateTimeField(auto_now_add=True)
