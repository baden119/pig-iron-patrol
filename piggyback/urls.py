from rest_framework import routers
from .api import PigViewSet

router = routers.DefaultRouter()
router.register('api/pigiron', PigViewSet, 'pigiron')


urlpatterns = router.urls
