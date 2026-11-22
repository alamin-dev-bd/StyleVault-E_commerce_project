"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

# Everything under /api/v1/ . Un-comment each line when you build that app.
api_v1_patterns = [
    path("", include("apps.common.urls")),  # /api/v1/health/
    path("schema/", SpectacularAPIView.as_view(), name="schema"),  # raw OpenAPI file
    path("docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
    path("auth/", include("apps.accounts.urls")),       
    path("", include("apps.catalog.urls")),              # Phase 2: /products/ /brands/ /categories/
    # path("cart/", include("apps.cart.urls")),            # Phase 3
    # path("wishlist/", include("apps.wishlist.urls")),    # Phase 3
    # path("coupons/", include("apps.promotions.urls")),   # Phase 3
    # path("checkout/", include("apps.orders.urls")),      # Phase 4
    # path("orders/", include("apps.orders.urls")),        # Phase 4
    # path("payments/", include("apps.payments.urls")),    # Phase 4
    # path("reviews/", include("apps.reviews.urls")),      # Phase 6
    # path("support/", include("apps.support.urls")),      # Phase 6
]

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include(api_v1_patterns)),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)