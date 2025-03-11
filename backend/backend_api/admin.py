from django.contrib import admin, messages
from django.utils.safestring import mark_safe
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
# admin.site.register(Perfume, nameSlugAdmin)
admin.site.register(Freshener, titleSlugAdmin)
admin.site.register(Consumables, titleSlugAdmin)
admin.site.register(Delivery)
admin.site.register(Gift)
admin.site.register(HeroData)

@admin.register(Perfume)
class PerfumeAdmin(admin.ModelAdmin):
    # fields = [
    #     'name', 'slug', 'brand', 'image', 'icon_image', ('price3', 'price5', 
    #     'price10', 'price20', 'price30'), 'perfumer', 'country', 'year', 'sex', 
    #     'compound1', 'compound2', 'compound3', 'compound4', 'compound5', 
    #     'family1', 'family2', 'family3', 'family4', 'family5', 'note1', 
    #     'note2', 'note3', 'note4', 'note5', 'chord1', 'chord2', 'chord3', 
    #     'chord4', 'chord5', 'description', 'feedback', 'is_available', ]
    prepopulated_fields = {"slug": ("name", )}
    readonly_fields = ['icon_image']
    list_display = ['id', 'icon_image', 'name', 'brand', 'is_available',]
    list_display_links = ['id', 'name', 'brand',]
    ordering = []
    list_editable = ['is_available',]
    list_per_page = 10
    actions = ['set_available', 'set_out_of_stock']
    search_fields = ['name', 'brand',]
    list_filter = ['brand', 'is_available',]
    save_on_top = True

    fieldsets = (
        (None, {
            'fields': (
                'name', 'slug', 'brand', 'image', 'icon_image', 'perfumer', 
                'country', 'year', 'sex', 'is_available')
        }),
        ('ЦЕНЫ', {
            'fields': ('price3', 'price5', 'price10', 'price20', 'price30')
        }),
        ('СОСТАВ', {
            'fields': (
                'compound1', 'compound2', 'compound3', 'compound4', 'compound5')
        }),
        ('СЕМЕЙСТВО', {
            'fields': ('family1', 'family2', 'family3', 'family4', 'family5')
        }),
        ('ОСНОВНЫЕ НОТЫ', {
            'fields': ('note1', 'note2', 'note3', 'note4', 'note5')
        }),
        ('АККОРДЫ', {
            'fields': ('chord1', 'chord2', 'chord3', 'chord4', 'chord5')
        }),
        ('ОПИСАНИЕ', {
            'fields': ('description', 'feedback')
        }),
    )


    @admin.action(description='Изменить статус на "в наличии"')
    def set_available(self, request, queryset):
        count = queryset.update(is_available=Perfume.Status.AVAILABLE)
        self.message_user(request, f"Изменено {count} записей.")

    @admin.action(description='Изменить статус на "нет в наличии"')
    def set_out_of_stock(self, request, queryset):
        count = queryset.update(is_available=Perfume.Status.OUT)
        self.message_user(request, f"Изменено {count} записей.", messages.WARNING)

    @admin.display(description="Фото", ordering='name')
    def icon_image(self, item: Perfume):
        if item.image:
            return mark_safe(f"<img src='{item.image.url}' width=50>")
        return "Без фото"
