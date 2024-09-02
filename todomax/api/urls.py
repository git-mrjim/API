from django.urls import path
from . import views


urlpatterns = [
    path('user/', views.UserView.as_view(), name="User"),
    path('task/', views.TaskView.as_view(), name="Task"),
    path('item/', views.ItemView.as_view(), name="Item")
]
