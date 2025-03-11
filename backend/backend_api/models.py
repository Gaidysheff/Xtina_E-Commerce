from django.db import models
from django_countries.fields import CountryField


# ------------------ Менеджеры для выбора "в наличии" ------------------
class PerfumeAvailabilityManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_available=Perfume.Status.AVAILABLE)

class FreshenerAvailabilityManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_available=Freshener.Status.AVAILABLE)

class ConsumablesAvailabilityManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_available=Consumables.Status.AVAILABLE)

# ---------------------------------------------------------------------

# ========================== PERFUME ==========================
class Compound(models.Model):
    name = models.CharField(
        max_length=255, unique=True, default="---", verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'состав'
        verbose_name_plural = 'ДУХИ: Состав'
        ordering = ['name',]
    
class Family(models.Model):
    name = models.CharField(
        max_length=255, unique=True, default="---", verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return self.name
        
    class Meta:
        verbose_name = 'семейство'
        verbose_name_plural = 'ДУХИ: Семейство'
        ordering = ['name',]

class Note(models.Model):
    name = models.CharField(
        max_length=255, unique=True, default="---", verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return self.name
        
    class Meta:
        verbose_name = 'основные ноты'
        verbose_name_plural = 'ДУХИ: Основные ноты'
        ordering = ['name',]
    
class Chord(models.Model):
    name = models.CharField(
        max_length=255, unique=True, default="---", verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return self.name
        
    class Meta:
        verbose_name = 'аккорды'
        verbose_name_plural = 'ДУХИ: Аккорды'
        ordering = ['name',]

class Perfume(models.Model):
    MALE = "M"
    FEMALE = "F"
    UNISEX = "U"
    SEX_CHOICES = {
        MALE: 'для мужчин',
        FEMALE: 'для женщин',
        UNISEX: 'унисекс'
        }
    # def is_upperclass(self):
    #     return self.sex_choice in {self.MALE, self.FEMALE}

    class Status(models.IntegerChoices):
        OUT = 0, 'нет в наличии'
        AVAILABLE = 1, 'в наличии'
    
    name = models.CharField(max_length=255, verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')
    brand = models.CharField(max_length=255, verbose_name='Бренд')
    image = models.ImageField(
        upload_to='image_perfume', verbose_name='Загрузить фото')
    price3 = models.IntegerField(verbose_name='Цена за 3 мл.')
    price5 = models.IntegerField(verbose_name='Цена за 5 мл.')
    price10 = models.IntegerField(verbose_name='Цена за 10 мл.')
    price20 = models.IntegerField(verbose_name='Цена за 20 мл.')
    price30 = models.IntegerField(verbose_name='Цена за 30 мл.')
    perfumer = models.CharField(
        max_length=255, null=True, blank=True, verbose_name='Парфюмер')
    # country = models.CharField(max_length=255, verbose_name='Страна')
    country = CountryField(null=True, blank=True, verbose_name='Страна')
    year = models.CharField(
        max_length=4, null=True, blank=True, verbose_name='Год создания')
    sex = models.CharField(
        max_length=2, choices=SEX_CHOICES, default=UNISEX, verbose_name='Пол')
    compound1 = models.ForeignKey(
        Compound, on_delete=models.CASCADE, default="---",
        related_name='compound1', verbose_name='Состав-1')
    compound2 = models.ForeignKey(
        Compound, on_delete=models.CASCADE, default="---",
        related_name='compound2', verbose_name='Состав-2')
    compound3 = models.ForeignKey(
        Compound, on_delete=models.CASCADE, default="---",
        related_name='compound3', verbose_name='Состав-3')
    compound4 = models.ForeignKey(
        Compound, on_delete=models.CASCADE, default="---",
        related_name='compound4', verbose_name='Состав-4')
    compound5 = models.ForeignKey(
        Compound, on_delete=models.CASCADE, default="---",
        related_name='compound5', verbose_name='Состав-5')
    family1 = models.ForeignKey(
        Family, on_delete=models.CASCADE, related_name='family1', 
        default="---", verbose_name='Семейство-1')
    family2 = models.ForeignKey(
        Family, on_delete=models.CASCADE, related_name='family2', 
        default="---", verbose_name='Семейство-2')
    family3 = models.ForeignKey(
        Family, on_delete=models.CASCADE, related_name='family3', 
        default="---", verbose_name='Семейство-3')
    family4 = models.ForeignKey(
        Family, on_delete=models.CASCADE, related_name='family4', 
        default="---", verbose_name='Семейство-4')
    family5 = models.ForeignKey(
        Family, on_delete=models.CASCADE, related_name='family5', 
        default="---", verbose_name='Семейство-5')
    note1 = models.ForeignKey(
        Note, on_delete=models.CASCADE, related_name='note1', default="---", 
        verbose_name='Основная нота-1')
    note2 = models.ForeignKey(
        Note, on_delete=models.CASCADE, related_name='note2', default="---", 
        verbose_name='Основная нота-2')
    note3 = models.ForeignKey(
        Note, on_delete=models.CASCADE, related_name='note3', default="---", 
        verbose_name='Основная нота-3')
    note4 = models.ForeignKey(
        Note, on_delete=models.CASCADE, related_name='note4', default="---", 
        verbose_name='Основная нота-4')
    note5 = models.ForeignKey(
        Note, on_delete=models.CASCADE, related_name='note5', default="---", 
        verbose_name='Основная нота-5')
    chord1 = models.ForeignKey(
        Chord, on_delete=models.CASCADE, related_name='chord1', default="---", 
        verbose_name='Аккорд-1')
    chord2 = models.ForeignKey(
        Chord, on_delete=models.CASCADE, related_name='chord2', default="---", 
        verbose_name='Аккорд-2')
    chord3 = models.ForeignKey(
        Chord, on_delete=models.CASCADE, related_name='chord3', default="---", 
        verbose_name='Аккорд-3')
    chord4 = models.ForeignKey(
        Chord, on_delete=models.CASCADE, related_name='chord4', default="---", 
        verbose_name='Аккорд-4')
    chord5 = models.ForeignKey(
        Chord, on_delete=models.CASCADE, related_name='chord5', default="---", 
        verbose_name='Аккорд-5')
    description = models.TextField(
        null=True, blank=True, verbose_name='Описание')
    feedback = models.TextField(null=True, blank=True, verbose_name='Отзывы')
    is_available = models.BooleanField(
        choices=tuple(map(lambda x: (bool(x[0]), x[1]), Status.choices)), 
        default=Status.AVAILABLE, verbose_name="Наличие")
        
    objects = models.Manager()
    available = PerfumeAvailabilityManager()

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'духи'
        verbose_name_plural = '01-ДУХИ'
        ordering = ['brand', 'name']

# ========================== Ароматизаторы ==========================

class Aroma(models.Model):
    name = models.CharField(
        max_length=255, default="---", unique=True, verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return self.name
            
    class Meta:
        verbose_name = 'аромат'
        verbose_name_plural = 'АРОМАТИЗАТОРЫ: Ароматы'
        ordering = ['name',]
    
class TopNote(models.Model):
    name = models.CharField(
        max_length=255, unique=True, default="---", verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return self.name
            
    class Meta:
        verbose_name = 'верхние ноты'
        verbose_name_plural = 'АРОМАТИЗАТОРЫ: Верхние ноты'
        ordering = ['name',]
    
class MiddleNote(models.Model):
    name = models.CharField(
        max_length=255, unique=True, default="---", verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return self.name
            
    class Meta:
        verbose_name = 'средние ноты'
        verbose_name_plural = 'АРОМАТИЗАТОРЫ: Средние ноты'
        ordering = ['name',]
    
class BaseNote(models.Model):
    name = models.CharField(
        max_length=255, unique=True, default="---", verbose_name='Название')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return self.name
            
    class Meta:
        verbose_name = 'базовые ноты'
        verbose_name_plural = 'АРОМАТИЗАТОРЫ: Базовые ноты'
        ordering = ['name',]
    

class Freshener(models.Model):
    class Status(models.IntegerChoices):
        OUT = 0, '--- в наличии'
        AVAILABLE = 1, 'В наличии'

    title = models.CharField(max_length=255, verbose_name='Название')
    subtitle = models.CharField(
        max_length=255, null=True, blank=True, verbose_name='Подзаголовок')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')
    image = models.ImageField(
        upload_to='image_freshener', verbose_name='Загрузить фото')
    price = models.IntegerField(verbose_name='Цена')
    aroma1 = models.ForeignKey(
        Aroma, on_delete=models.CASCADE, default="---", related_name='aroma1', 
        verbose_name='Аромат-1')
    aroma2 = models.ForeignKey(
        Aroma, on_delete=models.CASCADE, default="---", related_name='aroma2', 
        verbose_name='Аромат-2')
    aroma3 = models.ForeignKey(
        Aroma, on_delete=models.CASCADE, default="---", related_name='aroma3', 
        verbose_name='Аромат-3')
    aroma4 = models.ForeignKey(
        Aroma, on_delete=models.CASCADE, default="---", related_name='aroma4', 
        verbose_name='Аромат-4')
    aroma5 = models.ForeignKey(
        Aroma, on_delete=models.CASCADE, default="---", related_name='aroma5', 
        verbose_name='Аромат-5')
    topNote1 = models.ForeignKey(
        TopNote, on_delete=models.CASCADE, default="---",
        related_name='topNote1', verbose_name='Верхняя нота-1')
    topNote2 = models.ForeignKey(
        TopNote, on_delete=models.CASCADE, default="---",
        related_name='topNote2', verbose_name='Верхняя нота-2')
    topNote3 = models.ForeignKey(
        TopNote, on_delete=models.CASCADE, default="---",
        related_name='topNote3', verbose_name='Верхняя нота-3')
    topNote4 = models.ForeignKey(
        TopNote, on_delete=models.CASCADE, default="---",
        related_name='topNote4', verbose_name='Верхняя нота-4')
    topNote5 = models.ForeignKey(
        TopNote, on_delete=models.CASCADE, default="---",
        related_name='topNote5', verbose_name='Верхняя нота-5')
    middleNote1 = models.ForeignKey(
        MiddleNote, on_delete=models.CASCADE, default="---",
        related_name='middleNote1', verbose_name='Средняя нота-1')
    middleNote2 = models.ForeignKey(
        MiddleNote, on_delete=models.CASCADE, default="---",
        related_name='middleNote2', verbose_name='Средняя нота-2')
    middleNote3 = models.ForeignKey(
        MiddleNote, on_delete=models.CASCADE, default="---",
        related_name='middleNote3', verbose_name='Средняя нота-3')
    middleNote4 = models.ForeignKey(
        MiddleNote, on_delete=models.CASCADE, default="---",
        related_name='middleNote4', verbose_name='Средняя нота-4')
    middleNote5 = models.ForeignKey(
        MiddleNote, on_delete=models.CASCADE, default="---",
        related_name='middleNote5', verbose_name='Средняя нота-5')
    baseNote1 = models.ForeignKey(
        BaseNote, on_delete=models.CASCADE, default="---",
        related_name='baseNote1', verbose_name='Базовая нота-1')
    baseNote2 = models.ForeignKey(
        BaseNote, on_delete=models.CASCADE, default="---",
        related_name='baseNote2', verbose_name='Базовая нота-2')
    baseNote3 = models.ForeignKey(
        BaseNote, on_delete=models.CASCADE, default="---",
        related_name='baseNote3', verbose_name='Базовая нота-3')
    baseNote4 = models.ForeignKey(
        BaseNote, on_delete=models.CASCADE, default="---",
        related_name='baseNote4', verbose_name='Базовая нота-4')
    baseNote5 = models.ForeignKey(
        BaseNote, on_delete=models.CASCADE, default="---",
        related_name='baseNote5', verbose_name='Базовая нота-5')
    description = models.TextField(
        null=True, blank=True, verbose_name='Описание')
    is_available = models.BooleanField(
        choices=tuple(map(lambda x: (bool(x[0]), x[1]), Status.choices)), 
        default=Status.AVAILABLE, verbose_name="Наличие")
    
    objects = models.Manager()
    available = FreshenerAvailabilityManager()

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'ароматизатор'
        verbose_name_plural = '02-АРОМАТИЗАТОРЫ'
        ordering = ['title',]

# ========================== Расходники ==========================

class Consumables(models.Model):
    
    class Status(models.IntegerChoices):
        OUT = 0, '--- в наличии'
        AVAILABLE = 1, 'В наличии'

    title = models.CharField(max_length=255, verbose_name='Название')
    subtitle = models.CharField(
        max_length=255, null=True, blank=True, verbose_name='Подзаголовок')
    slug = models.SlugField(
        max_length=255, unique=True, db_index=True, verbose_name='URL')
    image = models.ImageField(
        upload_to='image_freshener', verbose_name='Загрузить фото')
    price = models.IntegerField(verbose_name='Цена')
    aroma = models.ForeignKey(
        Aroma, on_delete=models.CASCADE, default="---", verbose_name='Аромат')
    is_available = models.BooleanField(
        choices=tuple(map(lambda x: (bool(x[0]), x[1]), Status.choices)), 
        default=Status.AVAILABLE, verbose_name="Наличие")
    
    objects = models.Manager()
    available = ConsumablesAvailabilityManager()

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'расходник для ароматизатора'
        verbose_name_plural = '03-РАСХОДНИКИ'
        ordering = ['title',]

# ========================== Расходники ==========================


class Delivery(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    image = models.ImageField(
        upload_to='image_delivery', null=True, blank=True, 
        verbose_name='Загрузить фото')
    price = models.IntegerField(verbose_name='Цена')
    code = models.CharField(max_length=64, verbose_name='код')
    handler = models.CharField(max_length=64, verbose_name='handler')

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Способы доставки'
        verbose_name_plural = 'Способы доставки'
        # ordering = ['title',]

# ========================== GIFT ==========================


class Gift(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    image = models.ImageField(
        upload_to='image_gift', null=True, blank=True, 
        verbose_name='Загрузить фото')
    price = models.IntegerField(verbose_name='Цена')
    volume = models.CharField(max_length=8, verbose_name='Объём')

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Подарочный пробник'
        verbose_name_plural = 'Подарочный пробник'
        # ordering = ['title',]

# ========================== Hero Data ==========================


class HeroData(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    subtitle = models.CharField(max_length=255, verbose_name='Подзаголовок')
    image = models.ImageField(
        upload_to='image_heroData', verbose_name='Загрузить фото')
    noteHero1 = models.ForeignKey(
        Note, on_delete=models.CASCADE, default="---", related_name='noteHero1', 
        verbose_name='Основная нота-1')
    noteHero2 = models.ForeignKey(
        Note, on_delete=models.CASCADE, default="---", related_name='noteHero2', 
        verbose_name='Основная нота-2')
    noteHero3 = models.ForeignKey(
        Note, on_delete=models.CASCADE, default="---", related_name='noteHero3', 
        verbose_name='Основная нота-3')


    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Данные для Слайдера'
        verbose_name_plural = 'Данные для Слайдера'
        # ordering = ['title',]




