from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

    class Meta:
        verbose_name = 'Клиента'
        verbose_name_plural = 'Клиенты и Персонал'
        # ordering = ['name',]
