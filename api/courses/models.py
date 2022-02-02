from django.db import models
from django.utils import timezone

from users.models import User


class Course(models.Model):
    name = models.CharField(max_length=96)
    enrolled = models.ManyToManyField(
        User, related_name='courses')

    def __str__(self) -> str:
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=128)
    content = models.TextField()
    published_date = models.DateTimeField(default=timezone.now)
    course = models.ForeignKey(
        Course, on_delete=models.CASCADE, related_name='posts')
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='posts')

    def __str__(self) -> str:
        return self.title
