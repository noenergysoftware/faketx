from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def js(request):
    data = None
    with open("cheat.js", "rb") as fd:
        data = fd.read()
    return HttpResponse(data)