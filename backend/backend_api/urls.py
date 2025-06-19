from django.urls import path, include
from .views import (
	PerfumeApiView, FreshenerApiView, ConsumablesApiView, DeliveryApiView,
	GiftApiView, HeroDataApiView, SearchPerfumeApiView, NotesApiView, 
	ChordsApiView, CompoundsApiView, FamiliesApiView, AromasApiView,
	TopNotesApiView, MiddleNotesApiView, BaseNotesApiView, 
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
	'notes', NotesApiView, basename='notes'),
router.register(
	'chords', ChordsApiView, basename='chords'),
router.register(
	'compounds', CompoundsApiView, basename='compounds'),
router.register(
	'families', FamiliesApiView, basename='families'),
router.register(
	'aromas', AromasApiView, basename='aromas'),
router.register(
	'top_notes', TopNotesApiView, basename='top_notes'),
router.register(
	'middle_notes', MiddleNotesApiView, basename='middle_notes'),
router.register(
	'base_notes', BaseNotesApiView, basename='base_notes'),

router.register(
	'delivery', DeliveryApiView, basename='delivery')
router.register(
	'gift', GiftApiView, basename='gift')
router.register(
	'hero', HeroDataApiView, basename='hero')

router.register(
	'search', SearchPerfumeApiView, basename='search')

urlpatterns = [
    path('', include(router.urls)),
]
