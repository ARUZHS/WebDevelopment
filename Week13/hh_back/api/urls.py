from django.contrib import admin
from django.urls import path, include

from rest_framework_jwt.views import obtain_jwt_token

from api.views.views_generic import CompanyListAPIView, CompanyDetailAPIView, \
    VacancyListAPIView, VacancyDetailAPIView


urlpatterns = [
    path('login/', obtain_jwt_token),

    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),

    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
]
