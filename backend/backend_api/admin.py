from django.contrib import admin
from .models import (
	Compound, Family, Note, Chord, Aroma, TopNote, MiddleNote, BaseNote, Perfume, 
	Freshener, Consumables, Delivery, Gift, HeroData
    )

class titleSlugAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    
class nameSlugAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Compound, nameSlugAdmin)
admin.site.register(Family, nameSlugAdmin)
admin.site.register(Note, nameSlugAdmin)
admin.site.register(Chord, nameSlugAdmin)
admin.site.register(Aroma, nameSlugAdmin)
admin.site.register(TopNote, nameSlugAdmin)
admin.site.register(MiddleNote, nameSlugAdmin)
admin.site.register(BaseNote, nameSlugAdmin)
admin.site.register(Perfume, nameSlugAdmin)
admin.site.register(Freshener, titleSlugAdmin)
admin.site.register(Consumables, titleSlugAdmin)
admin.site.register(Delivery)
admin.site.register(Gift)
admin.site.register(HeroData)

