from rest_framework import routers
from .api import PersonaViewSet

router = routers.DefaultRouter()
router.register('api/persona', PersonaViewSet, 'persona')

urlpatterns = router.urls

