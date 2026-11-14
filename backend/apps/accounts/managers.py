from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    """Creates users that log in with an EMAIL instead of a username."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("An email address is required.")
        # normalize_email lowercases the domain part; we lowercase the whole address
        # so "Ali@Mail.com" and "ali@mail.com" can never become two accounts.
        email = self.normalize_email(email).lower()
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # hashes the password (never stored in plain text)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Normal customer account."""
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        """Admin account (used by `python manage.py createsuperuser`)."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_email_verified", True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        return self._create_user(email, password, **extra_fields)