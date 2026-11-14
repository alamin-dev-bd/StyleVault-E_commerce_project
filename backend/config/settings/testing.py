
"""Fast and isolated settings for automated tests."""

import os

# Provide a test-only secret key.
os.environ.setdefault(
    "DJANGO_SECRET_KEY",
    "test-only-secret-key-not-for-real-use",
)

# Use a separate test database if provided.
os.environ.setdefault(
    "DATABASE_URL",
    os.environ.get("TEST_DATABASE_URL", "sqlite:///:memory:"),
)

from .base import *  # noqa: E402,F401,F403


DEBUG = False

PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.MD5PasswordHasher",
]

EMAIL_BACKEND = "django.core.mail.backends.locmem.EmailBackend"

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.InMemoryStorage",
    },
    "staticfiles": {
        "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
    },
}
