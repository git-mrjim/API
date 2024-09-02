from rest_framework import serializers
from .models import User, Task, Item


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('task_id', 'do', 'difficulty')


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('id', 'user_id', 'title', 'difficulty')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'is_theme_dark', 'first_name', 'last_name')