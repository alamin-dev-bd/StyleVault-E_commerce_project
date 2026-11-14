from django.db import models


class TimeStampedModel(models.Model):
    """Abstract base: every model that inherits this gets created/updated timestamps."""

    created_at = models.DateTimeField(auto_now_add=True)  # set once, when the row is created
    updated_at = models.DateTimeField(auto_now=True)  # refreshed on every save()

    class Meta:
        abstract = True  # no table is created for this class itself
        ordering = ["-created_at"]