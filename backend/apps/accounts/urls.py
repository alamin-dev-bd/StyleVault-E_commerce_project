
from django.urls import path

from .views import *

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", Loginview.as_view(), name="login"),
    path("me/", CurrentUserView.as_view(), name="current-user"),
    path("token/refresh/",TokenRefreshView.as_view(),name="token-refresh",),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("password-reset/",PasswordResetRequestView.as_view(),name="password-reset",),
    path("password-reset/confirm/",PasswordResetConfirmView.as_view(),name="password-reset-confirm",),
]
