from rest_framework import routers
from .views import MemesViewset

class OptionalTrailingSlashRouter(routers.DefaultRouter):
    def __init__(self, *args, **kwargs):
        super(OptionalTrailingSlashRouter, self).__init__(*args, **kwargs)
        self.trailing_slash = "/?"

router = OptionalTrailingSlashRouter()
router.register('memes', MemesViewset, basename='memes')

urlpatterns = router.urls
