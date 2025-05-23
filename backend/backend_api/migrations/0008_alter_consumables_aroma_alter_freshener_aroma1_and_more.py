# Generated by Django 5.1.6 on 2025-05-21 15:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0007_alter_perfume_note1_alter_perfume_note2_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='consumables',
            name='aroma',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to='backend_api.aroma', verbose_name='Аромат'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='aroma1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='aroma1', to='backend_api.aroma', verbose_name='Аромат-1'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='aroma2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='aroma2', to='backend_api.aroma', verbose_name='Аромат-2'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='aroma3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='aroma3', to='backend_api.aroma', verbose_name='Аромат-3'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='aroma4',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='aroma4', to='backend_api.aroma', verbose_name='Аромат-4'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='aroma5',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='aroma5', to='backend_api.aroma', verbose_name='Аромат-5'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='baseNote1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='baseNote1', to='backend_api.basenote', verbose_name='Базовая нота-1'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='baseNote2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='baseNote2', to='backend_api.basenote', verbose_name='Базовая нота-2'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='baseNote3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='baseNote3', to='backend_api.basenote', verbose_name='Базовая нота-3'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='baseNote4',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='baseNote4', to='backend_api.basenote', verbose_name='Базовая нота-4'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='baseNote5',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='baseNote5', to='backend_api.basenote', verbose_name='Базовая нота-5'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='middleNote1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='middleNote1', to='backend_api.middlenote', verbose_name='Средняя нота-1'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='middleNote2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='middleNote2', to='backend_api.middlenote', verbose_name='Средняя нота-2'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='middleNote3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='middleNote3', to='backend_api.middlenote', verbose_name='Средняя нота-3'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='middleNote4',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='middleNote4', to='backend_api.middlenote', verbose_name='Средняя нота-4'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='middleNote5',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='middleNote5', to='backend_api.middlenote', verbose_name='Средняя нота-5'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='topNote1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='topNote1', to='backend_api.topnote', verbose_name='Верхняя нота-1'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='topNote2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='topNote2', to='backend_api.topnote', verbose_name='Верхняя нота-2'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='topNote3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='topNote3', to='backend_api.topnote', verbose_name='Верхняя нота-3'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='topNote4',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='topNote4', to='backend_api.topnote', verbose_name='Верхняя нота-4'),
        ),
        migrations.AlterField(
            model_name='freshener',
            name='topNote5',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='topNote5', to='backend_api.topnote', verbose_name='Верхняя нота-5'),
        ),
        migrations.AlterField(
            model_name='herodata',
            name='noteHero1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='noteHero1', to='backend_api.note', verbose_name='Основная нота-1'),
        ),
        migrations.AlterField(
            model_name='herodata',
            name='noteHero2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='noteHero2', to='backend_api.note', verbose_name='Основная нота-2'),
        ),
        migrations.AlterField(
            model_name='herodata',
            name='noteHero3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='noteHero3', to='backend_api.note', verbose_name='Основная нота-3'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='chord1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='chord1', to='backend_api.chord', verbose_name='Аккорд-1'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='chord2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='chord2', to='backend_api.chord', verbose_name='Аккорд-2'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='chord3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='chord3', to='backend_api.chord', verbose_name='Аккорд-3'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='chord4',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='chord4', to='backend_api.chord', verbose_name='Аккорд-4'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='chord5',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='chord5', to='backend_api.chord', verbose_name='Аккорд-5'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='compound1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='compound1', to='backend_api.compound', verbose_name='Состав-1'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='compound2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='compound2', to='backend_api.compound', verbose_name='Состав-2'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='compound3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='compound3', to='backend_api.compound', verbose_name='Состав-3'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='compound4',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='compound4', to='backend_api.compound', verbose_name='Состав-4'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='compound5',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='compound5', to='backend_api.compound', verbose_name='Состав-5'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='family1',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='family1', to='backend_api.family', verbose_name='Семейство-1'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='family2',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='family2', to='backend_api.family', verbose_name='Семейство-2'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='family3',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='family3', to='backend_api.family', verbose_name='Семейство-3'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='family4',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='family4', to='backend_api.family', verbose_name='Семейство-4'),
        ),
        migrations.AlterField(
            model_name='perfume',
            name='family5',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='family5', to='backend_api.family', verbose_name='Семейство-5'),
        ),
    ]
