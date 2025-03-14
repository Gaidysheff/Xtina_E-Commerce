from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView


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

# ===========================================================

class DeliveryApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Delivery.objects.all()
    serializer_class = DeliverySerializer
    lookup_field = 'id'


class GiftApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer
    lookup_field = 'id'


class HeroDataApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = HeroData.objects.all()
    serializer_class = HeroDataSerializer
    lookup_field = 'id'
