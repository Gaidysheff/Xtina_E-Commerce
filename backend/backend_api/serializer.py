from rest_framework import serializers

from .models import (
	Compound, Family, Note, Chord, Aroma, TopNote, MiddleNote, BaseNote, 
    Perfume, Freshener, Consumables, Delivery, Gift, HeroData
    )


class CompoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compound
        fields = '__all__'

class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class ChordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chord
        fields = '__all__'
        
class AromaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aroma
        fields = '__all__'

class TopNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopNote
        fields = '__all__'

class MiddleNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MiddleNote
        fields = '__all__'

class BaseNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseNote
        fields = '__all__'

# ===================== Main DataBase =================================   
class AllPerfumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfume
        fields = '__all__'

class PerfumeSerializer(serializers.ModelSerializer):
    compound1 = CompoundSerializer()
    compound2 = CompoundSerializer()
    compound3 = CompoundSerializer()
    compound4 = CompoundSerializer()
    compound5 = CompoundSerializer()
    family1 = FamilySerializer()
    family2 = FamilySerializer()
    family3 = FamilySerializer()
    family4 = FamilySerializer()
    family5 = FamilySerializer()
    note1 = NoteSerializer()
    note2 = NoteSerializer()
    note3 = NoteSerializer()
    note4 = NoteSerializer()
    note5 = NoteSerializer()
    chord1 = ChordSerializer()
    chord2 = ChordSerializer()
    chord3 = ChordSerializer()
    chord4 = ChordSerializer()
    chord5 = ChordSerializer()

    sex = serializers.CharField(source='get_sex_display')
    country = serializers.CharField(source='get_country_display')

    similar_products = serializers.SerializerMethodField()

    class Meta:
        model = Perfume
        # fields = '__all__'
        fields = ['name', 'slug', 'brand', 'image', 'price3', 'price5',
                  'price10', 'price20', 'price30', 'perfumer', 'country',
                  'year', 'sex', 'compound1', 'compound2', 'compound3',
                  'compound4', 'compound5', 'family1', 'family2', 'family3',
                  'family4', 'family5', 'note1', 'note2', 'note3', 'note4',
                  'note5', 'chord1', 'chord2', 'chord3', 'chord4', 'chord5',
                  'description', 'feedback', 'is_available',
                  'similar_products']
        
    def get_similar_products(self, product):
        products = Perfume.available.filter(note1=product.note1).exclude(id=product.id)
        # products = Perfume.objects.filter(note1=product.note1).exclude(id=product.id)
        serializer = AllPerfumeSerializer(products, many=True)
        return serializer.data

class FreshenerSerializer(serializers.ModelSerializer):
    aroma1 = AromaSerializer()
    aroma2 = AromaSerializer()
    aroma3 = AromaSerializer()
    aroma4 = AromaSerializer()
    aroma5 = AromaSerializer()
    aroma5 = AromaSerializer()
    topNote1 = TopNoteSerializer()
    topNote2 = TopNoteSerializer()
    topNote3 = TopNoteSerializer()
    topNote4 = TopNoteSerializer()
    topNote5 = TopNoteSerializer()
    middleNote1 = MiddleNoteSerializer()
    middleNote2 = MiddleNoteSerializer()
    middleNote3 = MiddleNoteSerializer()
    middleNote4 = MiddleNoteSerializer()
    middleNote5 = MiddleNoteSerializer()
    baseNote1 = BaseNoteSerializer()
    baseNote2 = BaseNoteSerializer()
    baseNote3 = BaseNoteSerializer()
    baseNote4 = BaseNoteSerializer()
    baseNote5 = BaseNoteSerializer()

    class Meta:
        model = Freshener
        fields = '__all__'

class ConsumablesSerializer(serializers.ModelSerializer):
    aroma = AromaSerializer()
    class Meta:
        model = Consumables
        fields = '__all__'

# ============================================================  

class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = '__all__'
        
class GiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gift
        fields = '__all__'

class HeroDataSerializer(serializers.ModelSerializer):
    noteHero1 = NoteSerializer()
    noteHero2 = NoteSerializer()
    noteHero3 = NoteSerializer()

    class Meta:
        model = HeroData
        fields = '__all__'



