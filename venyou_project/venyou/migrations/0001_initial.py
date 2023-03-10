# Generated by Django 4.1.4 on 2022-12-16 22:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Venue',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False, unique=True)),
                ('capacity', models.CharField(max_length=100)),
                ('photo_url', models.TextField()),
                ('location', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('photo_url', models.TextField()),
                ('date', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('sold_out', models.BooleanField()),
                ('tag', models.CharField(max_length=100)),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='events', to='venyou.venue')),
            ],
        ),
    ]
