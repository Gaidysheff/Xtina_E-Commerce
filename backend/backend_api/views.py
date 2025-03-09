from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.response import Response

from .models import (
	Compound, Family, Note, Chord, Aroma, TopNote, MiddleNote, BaseNote, Perfume, 
	Freshener, Consumables, Delivery, Gift, HeroData
    )

from .serializer import (
	CompoundSerializer, FamilySerializer, NoteSerializer, ChordSerializer, 
    AromaSerializer, TopNoteSerializer, MiddleNoteSerializer, BaseNoteSerializer, 
    PerfumeSerializer, FreshenerSerializer, ConsumablesSerializer, 
    DeliverySerializer, GiftSerializer, HeroDataSerializer
    )


class PerfumeApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Perfume.objects.all()
    serializer_class = PerfumeSerializer
    lookup_field = 'slug'

class FreshenerApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Freshener.objects.all()
    serializer_class = FreshenerSerializer
    lookup_field = 'slug'

class ConsumablesApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Consumables.objects.all()
    serializer_class = ConsumablesSerializer
    lookup_field = 'slug'
