from django.urls import path, include
from replies import views

urlpatterns = [
    path('all/', views.logged_in_user),
]