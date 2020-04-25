from django.contrib import admin
from django.urls import path, include

from api.views import company_list, company_detail, vacancies_by_company, vacancy_list, vacancy_detail, vacancy_top

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', vacancies_by_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancy_top),
]
