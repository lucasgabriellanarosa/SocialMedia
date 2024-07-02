from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.http import JsonResponse, HttpResponseBadRequest
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from .models import *
import json
from django.views.decorators.csrf import csrf_exempt



# Create an account
@csrf_exempt
def account_register(request):
    if request.method == 'POST':
        register_data = json.loads(request.body)

        username = register_data.get('username')
        password = register_data.get('password')
        confirm_password = register_data.get('confirm_password')

        if password != confirm_password:
            return JsonResponse({"message": "Password must match!"})
        
        try:
            user = User.objects.create_user(username=username,password=password)
            user.save()
        except IntegrityError:
            return JsonResponse({'message': 'Username already taken.'})
        
        print(user)
        login(request, user)
        return JsonResponse({"message": "Account created and user logged in!"})

@csrf_exempt
def account_login(request):
    if request.method == "POST":
        login_data = json.loads(request.body)
        username = login_data.get('username')
        password = login_data.get('password')

        if username and password:
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return JsonResponse({'details': "Login successful"})
            else:
                return JsonResponse({'error': "Invalid credentials"}, status=401)
        else:
            return HttpResponseBadRequest('Both username and password are required in the request.')


@csrf_exempt
@login_required
def account_logout(request):
    logout(request)
    return JsonResponse({"detail": "Logged out"})

def is_user_logged(request):
    if request.user.is_authenticated:
        user = request.user
        return JsonResponse({"username": user.username, 'logged': True})
    else:
        return JsonResponse({'logged': False})


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
