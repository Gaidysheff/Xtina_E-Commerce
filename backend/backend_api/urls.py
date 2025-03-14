from django.urls import path, include
from .views import (
	PerfumeApiView, FreshenerApiView, ConsumablesApiView, DeliveryApiView,
	GiftApiView, HeroDataApiView
	)
from rest_framework import routers

router = routers.SimpleRouter()
router.register(
	'perfumes', PerfumeApiView, basename='perfumes')
router.register(
	'fresheners', FreshenerApiView, basename='fresheners')
router.register(
	'consumables', ConsumablesApiView, basename='consumables')

router.register(
	'delivery', DeliveryApiView, basename='delivery')
router.register(
	'gift', GiftApiView, basename='gift')
router.register(
	'hero', HeroDataApiView, basename='hero')

urlpatterns = [
    path('', include(router.urls))
]
