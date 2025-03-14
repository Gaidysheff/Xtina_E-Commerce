from django.conf.urls.static import static
from django.conf import settings

from django.contrib import admin
from django.urls import include, path

# from rest_framework.schemas import get_schema_view
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

urlpatterns = [
    path('admin/', admin.site.urls),
	path('api/', include('backend_api.urls')),
    # YOUR PATTERNS
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    # Optional UI:
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    # path('openapi', get_schema_view(
    #     title="Perfumes",
    #     description="API for all goods …"
    # ), name='openapi-schema'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.site_header = "Панель администрирования Базы Данных магазина K.ÉST23"
admin.site.index_title = "Разделы Базы Данных магазина K.ÉST23"

