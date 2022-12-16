
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('', views.VenueList.as_view(), name='venue_list'),
    path('events/', views.EventList.as_view(), name='event_list'),
    path('venue/<str:pk>', views.VenueDetail.as_view(), name='venue_detail'),
    path('events/<str:pk>', views.EventDetail.as_view(), name='event_detail'),
]