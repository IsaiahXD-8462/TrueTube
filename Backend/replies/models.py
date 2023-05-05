from django.db import models
from authentication.models import User

# Create your models here.
class Reply(models.Model):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    commentation = models.ForeignKey(User, on_delete=models.CASCADE)