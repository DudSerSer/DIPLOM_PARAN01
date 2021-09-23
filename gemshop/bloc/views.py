from django.shortcuts import render

# Create your views here.
def bloc(request):
    return render(request, 'bloc/bloc.html')