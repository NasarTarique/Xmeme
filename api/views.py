from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import MemeSerializer
from .models import Memes

# Create your views here.

class MemesViewset(viewsets.ModelViewSet):
    queryset = Memes.objects.all().order_by('-id')[:100]
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = MemeSerializer

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            resp = {"id":serializer.data["id"]}
            return Response(resp, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
