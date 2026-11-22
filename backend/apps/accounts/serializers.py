
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.conf import settings
from django.utils.encoding import force_bytes
from django.utils.http import (
    urlsafe_base64_encode,
    urlsafe_base64_decode,
)
from django.core.exceptions import ValidationError as DjangoValidationError



User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        validators=[validate_password]
    )

    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "full_name",
            "phone",
            "password",
            "confirm_password",
        ]
        read_only_fields = ["id"]

    def validate_email(self, value):
        email = value.strip().lower()

        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                "An account with this email already exists please login"
            )

        return email

    def validate(self, attrs):
        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError({
                "confirm_password": "Passwords do not match."
            })

        return attrs

    def create(self, validated_data):
        validated_data.pop("confirm_password")
        password = validated_data.pop("password")

        return User.objects.create_user(
            password=password,
            **validated_data
        )

class LoginSerializer(TokenObtainPairSerializer):
    username_field = "email"

    def validate(self, attrs):
        attrs["email"] = attrs.pop("email","").strip().lower()

        return super().validate(attrs)

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "full_name",
            "phone",
            "is_email_verified",
            "date_joined",
        ]
        read_only_fields = [
            "id",
            "email",
            "is_email_verified",
            "date_joined",
        ]


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def save(self, **kwargs):
        try:
            refresh_token = RefreshToken(
                self.validated_data["refresh"]
            )

            # Check that the token belongs to the logged-in user.
            request = self.context["request"]

            if str(refresh_token["user_id"]) != str(request.user.pk):
                raise serializers.ValidationError(
                    {"refresh": "This token does not belong to you."}
                )

            refresh_token.blacklist()

        except TokenError:
            raise serializers.ValidationError(
                {"refresh": "Invalid or expired refresh token."}
            )



class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def save(self, **kwargs):
        email = self.validated_data["email"].strip().lower()

        user = User.objects.filter(
            email__iexact=email,
            is_active=True
        ).first()

        if user:
            # Generate encoded user ID
            uid = urlsafe_base64_encode(force_bytes(user.pk))

            # Generate secure password reset token
            token = default_token_generator.make_token(user)

            # Build frontend reset URL
            frontend_url = getattr(
                settings,
                "FRONTEND_URL",
                "http://localhost:5173"
            )

            reset_link = (
                f"{frontend_url}/reset-password/"
                f"?uid={uid}&token={token}"
            )

            # Send password reset email
            send_mail(
                subject="Reset Your StyleVault Password",
                message=(
                    f"Hello {user.get_short_name()},\n\n"
                    "You requested a password reset.\n"
                    "Click the link below to reset your password:\n\n"
                    f"{reset_link}\n\n"
                    "If you did not request this, ignore this email."
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=False,
            )

        return {
            "detail": (
                "If an account exists with this email, "
                "a password reset link has been sent."
            )
        }

    email = serializers.EmailField()

    def save(self, **kwargs):
        email = self.validated_data["email"].strip().lower()

        user = User.objects.filter(
            email__iexact=email,
            is_active=True
        ).first()

        if user:
            # Generate encoded user ID
            uid = urlsafe_base64_encode(force_bytes(user.pk))

            # Generate secure password reset token
            token = default_token_generator.make_token(user)

            # Build frontend reset URL
            frontend_url = getattr(
                settings,
                "FRONTEND_URL",
                "http://localhost:5173"
            )

            reset_link = (
                f"{frontend_url}/reset-password/"
                f"?uid={uid}&token={token}"
            )

            # Send password reset email
            send_mail(
                subject="Reset Your StyleVault Password",
                message=(
                    f"Hello {user.get_short_name()},\n\n"
                    "You requested a password reset.\n"
                    "Click the link below to reset your password:\n\n"
                    f"{reset_link}\n\n"
                    "If you did not request this, ignore this email."
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=False,
            )

        return {
            "detail": (
                "If an account exists with this email, "
                "a password reset link has been sent."
            )
        }


class PasswordResetConfirmSerializer(serializers.Serializer):
    uid = serializers.CharField()
    token = serializers.CharField()
    new_password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        # Step 1: Check whether both passwords match
        if attrs["new_password"] != attrs["confirm_password"]:
            raise serializers.ValidationError({
                "confirm_password": "Passwords do not match."
            })

        # Step 2: Decode the user ID
        try:
            uid = urlsafe_base64_decode(attrs["uid"]).decode()
            user = User.objects.get(pk=uid, is_active=True)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            raise serializers.ValidationError({
                "uid": "Invalid password reset link."
            })

        # Step 3: Verify the reset token
        if not default_token_generator.check_token(user, attrs["token"]):
            raise serializers.ValidationError({
                "token": "Invalid or expired password reset link."
            })

        # Step 4: Validate the new password
        try:
            validate_password(attrs["new_password"], user=user)
        except DjangoValidationError as error:
            raise serializers.ValidationError({
                "new_password": list(error.messages)
            })

        attrs["user"] = user
        return attrs

    def save(self, **kwargs):
        user = self.validated_data["user"]
        user.set_password(self.validated_data["new_password"])
        user.save(update_fields=["password"])

        return user

