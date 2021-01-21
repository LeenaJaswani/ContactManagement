from django.conf.urls import url
from contact import views

from rest_framework import routers
from django.urls import path, include
from django.views.generic.base import TemplateView

from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'contacts', views.ContactViewSet)
urlpatterns = [
 url(r'^$', views.HomePageView.as_view()),
 url(r'', include(router.urls)),

]