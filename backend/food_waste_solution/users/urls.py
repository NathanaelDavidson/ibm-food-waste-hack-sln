from django.urls import include, path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('me/', views.UserDetail.as_view()),
    path('signup/', views.UserCreate.as_view()),
    path('logout/', views.UserLogout.as_view()),
    path('login/', views.UserLogin.as_view())
]
