# Generated by Django 3.1.6 on 2021-02-06 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Memes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('memeOwner', models.CharField(max_length=20)),
                ('Caption', models.TextField(max_length=120)),
                ('memeImage', models.ImageField(upload_to='')),
            ],
        ),
    ]
