from rest_framework import serializers

from .models import Brand, Category, Product, ProductImage, ProductVariant


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ("id", "name", "slug", "logo", "is_active")


class CategorySerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ("id", "name", "slug", "parent", "image", "is_active", "children")

    def get_children(self, obj):
        # Only include active children
        qs = obj.children.filter(is_active=True)
        return CategorySerializer(qs, many=True, context=self.context).data


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ("id", "image", "alt_text", "is_primary", "sort_order")


class ProductVariantSerializer(serializers.ModelSerializer):
    is_in_stock = serializers.BooleanField(read_only=True)

    class Meta:
        model = ProductVariant
        fields = (
            "id",
            "sku",
            "size",
            "color",
            "price",
            "stock",
            "is_active",
            "is_in_stock",
        )


class ProductListSerializer(serializers.ModelSerializer):
    """Lighter payload for product listing / cards."""
    brand = BrandSerializer(read_only=True)
    category = serializers.StringRelatedField()
    primary_image = ProductImageSerializer(read_only=True)
    min_price = serializers.SerializerMethodField()
    in_stock = serializers.SerializerMethodField()

    class Meta:
        inter_model = Product
        fields = (
            "id",
            "name",
            "slug",
            "short_description",
            "brand",
            "category",
            "primary_image",
            "min_price",
            "in_stock",
            "is_active",
        )

    def get_min_price(self, obj):
        prices = obj.variants.filter(is_active=True).values_list("price", flat=True)
        return min(prices) if prices else None

    def get_in_stock(self, obj):
        return obj.variants.filter(is_active=True, stock__gt=0).exists()


class ProductDetailSerializer(serializers.ModelSerializer):
    brand = BrandSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    variants = ProductVariantSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "slug",
            "description",
            "short_description",
            "brand",
            "category",
            "images",
            "variants",
            "is_active",
            "created_at",
        )