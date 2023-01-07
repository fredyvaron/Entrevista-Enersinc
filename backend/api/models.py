from django.db import models
# Create your models here. 
class Persona(models.Model):
    tipoDocumento = models.CharField(max_length=12)
    documento = models.CharField(max_length=15)
    nombre = models.CharField(max_length=90)
    apellidos = models.CharField(max_length=90)
    hobbie = models.CharField(max_length=250)
    created_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.nombre
    
