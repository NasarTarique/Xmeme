from django.db import models

# Create your models here.


class Memes(models.Model):
    name = models.CharField(max_length=50, default="jhon")
    url  = models.CharField(max_length=400, default="this is a caption")
    caption  = models.TextField(max_length=120)
