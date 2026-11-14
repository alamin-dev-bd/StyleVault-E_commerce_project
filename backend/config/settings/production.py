
"""Production settings for Render."""

from django.core.exceptions import ImproperlyConfigured

from .base import *  # noqa: F401,F403


# ---------------------------------------------------------------------------
# GENERAL
# ---------------------------------------------------------------------------

DEBUG = False


# ---------------------------------------------------------------------------
# CLOUDINARY - REQUIRED IN PRODUCTION
# ---------------------------------------------------------------------------

if not USE_CLOUDINARY:
    raise ImproperlyConfigured(
        "Cloudinary credentials are missing. Set "
        "CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and "
        "CLOUDINARY_API_SECRET in the production environment."
    )


# ---------------------------------------------------------------------------
# RENDER HOSTNAME
# ---------------------------------------------------------------------------

_render_host = env("RENDER_EXTERNAL_HOSTNAME", default="")

if _render_host:
    if _render_host not in ALLOWED_HOSTS:
        ALLOWED_HOSTS.append(_render_host)


# ---------------------------------------------------------------------------
# STATIC AND MEDIA STORAGE
# ---------------------------------------------------------------------------

STORAGES = {
    "default": {
        "BACKEND": "cloudinary_storage.storage.MediaCloudinaryStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}


# ---------------------------------------------------------------------------
# EMAIL
# ---------------------------------------------------------------------------

EMAIL_BACKEND = env(
    "EMAIL_BACKEND",
    default="django.core.mail.backends.smtp.EmailBackend",
)


# ---------------------------------------------------------------------------
# HTTPS AND SECURITY
# ---------------------------------------------------------------------------

SECURE_SSL_REDIRECT = env.bool(
    "SECURE_SSL_REDIRECT",
    default=True,
)

SECURE_PROXY_SSL_HEADER = (
    "HTTP_X_FORWARDED_PROTO",
    "https",
)

SECURE_REDIRECT_EXEMPT = [
    r"^api/v1/health/$",
]

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

SECURE_CONTENT_TYPE_NOSNIFF = True

X_FRAME_OPTIONS = "DENY"


# ---------------------------------------------------------------------------
# HSTS
# ---------------------------------------------------------------------------

SECURE_HSTS_SECONDS = env.int(
    "SECURE_HSTS_SECONDS",
    default=3600,
)

SECURE_HSTS_INCLUDE_SUBDOMAINS = False
SECURE_HSTS_PRELOAD = False
