from django.urls import path, include
from comments import views

urlpatterns = [
    path('all/', views.logged_in_user),
]
