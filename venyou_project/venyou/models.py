from django.db import models


class Venue(models.Model):
    name = models.CharField(max_length=100, primary_key=True, unique=True)
    capacity = models.CharField(max_length=100)
    photo_url = models.TextField()
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Event(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    photo_url = models.TextField()
    date = models.CharField(max_length=100)
    price = models.IntegerField()
    sold_out = models.BooleanField()
    tag = models.CharField(max_length=100)
    location = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name='events')