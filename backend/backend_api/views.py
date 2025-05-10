from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from django.db.models import Q
from rest_framework.views import APIView

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

# ===========================================================

class SearchPerfumeApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    serializer_class = PerfumeSerializer

    def get_queryset(self):
        qs = Perfume.objects.all()
        name = self.request.query_params.get('name')
        if name is not None:
            qs = qs.filter(Q(name__icontains=name) | Q(brand__icontains=name))
        return qs
        
# http://localhost:5173/search?name=xxxxx        

# ===========================================================

class NotesApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    lookup_field = 'id'

    
class ChordsApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Chord.objects.all()
    serializer_class = ChordSerializer
    lookup_field = 'id'


class CompoundsApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Compound.objects.all()
    serializer_class = CompoundSerializer
    lookup_field = 'id'


class FamiliesApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Family.objects.all()
    serializer_class = FamilySerializer
    lookup_field = 'id'


