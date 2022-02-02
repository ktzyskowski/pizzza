from django.db import models
from django.contrib.auth import models as auth_models
from django.dispatch import receiver
from django.db.models.signals import post_save


class User(models.Model):
    auth = models.OneToOneField(auth_models.User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=24)
    last_name = models.CharField(max_length=32)

    def __str__(self) -> str:
        return self.first_name + ' ' + self.last_name
