from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # Create an account
    path('register/', views.account_register, name="account_register"),
    path('login/', views.account_login, name="account_login"),
    path('logout/', views.account_logout, name="account_logout"),
    path('is_user_logged/', views.is_user_logged, name="is_user_logged"),
    path('get_users/', views.get_users, name="get_users"),

    # Create a post
    path('create_post/', views.create_post, name="create_post"),
    path('edit_post/', views.edit_post, name="edit_post"),
    path('delete_post/', views.delete_post, name="delete_post"),

    # Like/Unlike post
    path('like_post_logic/', views.like_post_logic, name="like_post_logic"),

    # Comment on post
    path('create_comment/', views.create_comment, name="create_comment"),
    path('edit_comment/', views.edit_comment, name="edit_comment"),
    path('delete_comment/', views.delete_comment, name="delete_comment"),

    # Follow/Unfollow user
    path('follow_user_logic/', views.follow_user_logic, name="follow_user_logic"),

    # Search 
    path('search_user/', views.search_user, name="search_user")

]
