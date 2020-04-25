from django.http import JsonResponse
from django.shortcuts import render

from api.models import Product, Category


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    try:
        p = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error' : str(e)})
    return JsonResponse(p.to_json())

def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, category_id):
    return JsonResponse(Category.objects.get(id = category_id).to_json())

def products_by_category(request, category_id):
    products = Product.objects.filter(category_id = category_id)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

# Create your views here.
