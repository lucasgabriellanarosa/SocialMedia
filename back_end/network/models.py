from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    pass

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    text = models.TextField(max_length=1024)
    timestamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.user} post - {self.timestamp}"

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_likes')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_likes')
    
    def __str__(self):
        return f"{self.user} liked {self.post}"
    
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_comments')
    text = models.TextField(max_length=1024)
    
    def __str__(self):
        return f"{self.user} commented on {self.post}"
    
class Following(models.Model):
    user_following = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_following')
    user_followed = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_followed')

    def __str__(self):
        return f"{self.user_following} is following {self.user_followed}"
    
    