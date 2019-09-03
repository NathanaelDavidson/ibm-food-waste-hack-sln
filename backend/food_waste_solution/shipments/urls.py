from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.ShipmentCreate.as_view()),
    path('contract/create/', views.ContractCreate.as_view()),
    path('contract/accept/', views.ContractAccept.as_view()),
    path('contract/cancel/', views.ContractCancel.as_view()),
    path('contract/decline/', views.ContractDecline.as_view()),
    path('contract/offers/', views.PendingOffersList.as_view()),
    path('contract/', views.ContractDetail.as_view()),
    path('all/', views.ShipmentList.as_view()),
    path('seller/', views.ShipmentListBySeller.as_view()),
    path('', views.ShipmentDetail.as_view())
]
