from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    """
    Custom user: the EMAIL is the login name.
    AbstractBaseUser gives us: password, last_login.
    PermissionsMixin gives us: is_superuser, groups, user_permissions.
    """

    email = models.EmailField("email address", max_length=255, unique=True)  # unique => no duplicates
    full_name = models.CharField(max_length=150, blank=True)
    phone = models.CharField(max_length=20, blank=True)

    is_active = models.BooleanField(default=True)  # False = account disabled
    is_staff = models.BooleanField(default=False)  # True = may enter Django Admin / admin API
    is_email_verified = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = UserManager()

    USERNAME_FIELD = "email"  # the field used to log in
    REQUIRED_FIELDS = []  # extra fields `createsuperuser` asks for (email + password are automatic)

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"

    def save(self, *args, **kwargs):
        # Second safety net: even if someone saves a user directly, store a lowercase email.
        self.email = self.email.lower()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.full_name or self.email

    def get_short_name(self):
        return self.full_name.split(" ")[0] if self.full_name else self.email