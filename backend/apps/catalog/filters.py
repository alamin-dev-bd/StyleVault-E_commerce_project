import django_filters

from .models import Product


class ProductFilter(django_filters.FilterSet):
    brand = django_filters.CharFilter(field_name="brand__slug")
    category = django_filters.CharFilter(field_name="category__slug")
    min_price = django_filters.NumberFilter(field_name="variants__price", lookup_expr="gte")
    max_price = django_filters.NumberFilter(field_name="variants__price", lookup_expr="lte")
    in_stock = django_filters.BooleanFilter(method="filter_in_stock")
    size = django_filters.CharFilter(field_name="variants__size", lookup_expr="iexact")
    color = django_filters.CharFilter(field_name="variants__color", lookup_expr="icontains")

    class Meta:
        model = Product
        fields = ["brand", "category", "min_price", "max_price", "in_stock", "size", "color"]

    def filter_in_stock(self, queryset, name, value):
        if value:
            return queryset.filter(variants__is_active=True, variants__stock__gt=0).distinct()
        return queryset
