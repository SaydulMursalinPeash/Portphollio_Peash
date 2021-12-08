from django.db import models


class Project(models.Model):
    project_name=models.CharField(max_length=200,null=True)
    details=models.TextField(max_length=3000,null=True)
    creation_time=models.DateTimeField(auto_now_add=True)
    image=models.URLField(blank=True,null=True)

    def __str__(self):
        return self.project_name

class MyPhoto(models.Model):
    myphoto=models.URLField(null=True,blank=True)

   
class Background(models.Model):
    background=models.URLField(blank=True,)




