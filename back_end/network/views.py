from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from .models import *
import json
from django.views.decorators.csrf import csrf_exempt



# Create an account
def register(request):
    response = JsonResponse({"message": "Hello, world!"})

    return response

@csrf_exempt
def account_login(request):
    if request.method == "POST":
        # Attempt to sign user in
        login_data = json.loads(request.body)

        username = login_data.get('username')
        password = login_data.get('password')

        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return JsonResponse({'details': "Login 100%"})


@csrf_exempt
@login_required
def account_logout(request):
    logout(request)
    return  JsonResponse({"detail": "Logged out"})


# Create a post

def create_post():
    return

def edit_post():
    return

def delete_post():
    return

# Like/Unlike post

def like_post_logic():
    return

# Comment on post

def create_comment():
    return

def edit_comment():
    return

def delete_comment():
    return

# Follow/Unfollow user

def follow_user_logic():
    return

# Search 

def search_user():
    return
