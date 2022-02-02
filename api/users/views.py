from rest_framework.decorators import api_view, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.request import Request
from rest_framework.response import Response

from . import models


@api_view(['GET'])
@authentication_classes([SessionAuthentication])
def get_users(self, request: Request) -> Response:
    return Response({
        'users': models.User.objects.all()
    })
