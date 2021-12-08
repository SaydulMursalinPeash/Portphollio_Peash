from django.shortcuts import render
from django.shortcuts import render,redirect,HttpResponse
from .models import *

def Home(request):
    data=list(Project.objects.all().reverse())
    request.get_full_path()
    myphoto=list(MyPhoto.objects.all())
    background=list(Background.objects.all())
    background=background[-1]
    myphoto=myphoto[-1]
    print(data)
    context={'projects':data,'myphoto':myphoto.myphoto,'background':background.background}
    return render(request,'portfolio/home.html',context)