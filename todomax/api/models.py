from django.db import models


# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    is_theme_dark = models.BooleanField(default=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

class Task(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    title = models.CharField(max_length=255)
    difficulty = models.IntegerField()

    def __str__(self):
        return self.title
    

class Item(models.Model):
    task_id = models.IntegerField()
    do = models.CharField(max_length=255)
    difficulty = models.IntegerField()

    def __str__(self):
        return self.do