from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class HealthCheckView(APIView):
    """Used by you (smoke test) and by Render (health check). Needs no login."""

    permission_classes = [AllowAny]
    authentication_classes = []  # skip JWT parsing: this endpoint must always be cheap

    def get(self, request):
        return Response({"status": "ok"})
