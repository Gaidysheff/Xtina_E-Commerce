from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q
# from rest_framework.decorators import api_view
# from rest_framework.response import Response


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


# ================= Pagination style ===================
class StandardResultsSetPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    # max_page_size = 10000

# @api_view(["GET"])
# def perfume_list(request):
#     perfumes = Perfume.objects.all()
#     paginator = StandardResultsSetPagination()
#     paginated_perfumes = paginator.paginate_queryset(perfumes, request)
#     serializer = PerfumeSerializer(paginated_perfumes, many=True)
#     return paginator.get_paginated_response(serializer.data)

# ===========================================================
class PerfumeApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Perfume.objects.all()
    serializer_class = PerfumeSerializer
    lookup_field = 'slug'
    pagination_class = StandardResultsSetPagination


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


class AromasApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Aroma.objects.all()
    serializer_class = AromaSerializer
    lookup_field = 'id'


class TopNotesApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = TopNote.objects.all()
    serializer_class = TopNoteSerializer
    lookup_field = 'id'


class MiddleNotesApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = MiddleNote.objects.all()
    serializer_class = MiddleNoteSerializer
    lookup_field = 'id'


class BaseNotesApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = BaseNote.objects.all()
    serializer_class = BaseNoteSerializer
    lookup_field = 'id'


