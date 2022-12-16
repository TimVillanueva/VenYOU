from rest_framework import serializers
from .models import Event, Venue


class EventSerializer(serializers.HyperlinkedModelSerializer):
    location = serializers.HyperlinkedRelatedField(
        view_name = 'venue_detail',
        read_only = True
    )
    class Meta:
        model = Event
        fields = ('name', 'date', 'photo_url', 'tag', 'price', 'sold_out', 'location' )




class VenueSerializer(serializers.HyperlinkedModelSerializer):
    events = EventSerializer(
        many=True,
        read_only=True
    )
    class Meta:
        model = Venue
        fields = ('name', 'capacity', 'photo_url', 'location', 'events')