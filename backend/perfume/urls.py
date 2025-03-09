from django.conf.urls.static import static
from django.conf import settings

from django.contrib import admin
from django.urls import include, path

from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('admin/', admin.site.urls),
	path('api/', include('backend_api.urls')),
    path('openapi', get_schema_view(
        title="Perfumes",
        description="API for all goods …"
    ), name='openapi-schema'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


