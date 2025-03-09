from django.urls import path, include
from .views import (
	PerfumeApiView, FreshenerApiView, ConsumablesApiView
	)
from rest_framework import routers

router = routers.SimpleRouter()
router.register('perfumes', PerfumeApiView, basename='perfumes')
router.register('fresheners', FreshenerApiView, basename='fresheners')
router.register('consumables', ConsumablesApiView, basename='consumables')

urlpatterns = [
    path('', include(router.urls))
]
