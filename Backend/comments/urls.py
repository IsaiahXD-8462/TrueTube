from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.nonlogged_in_user),
    path('all/', views.logged_in_user),
]
