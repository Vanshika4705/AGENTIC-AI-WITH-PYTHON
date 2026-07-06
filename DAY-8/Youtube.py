class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.subscribed = False

    def subscribe(self):
        self.subscribed = True


class Channel:
    def __init__(self, name, owner):
        self.name = name
        self.owner = owner
        self.subscribers = 0

    def add_subscriber(self):
        self.subscribers += 1


class Video:
    def __init__(self, title, duration, category):
        self.title = title
        self.duration = duration
        self.category = category
        self.views = 0
        self.likes = 0

    def watch(self):
        self.views += 1

    def like(self):
        self.likes += 1


class Playlist:
    def __init__(self, name):
        self.name = name
        self.total_videos = 0

    def add_video(self):
        self.total_videos += 1


class Comment:
    def __init__(self, user, message):
        self.user = user
        self.message = message
        self.likes = 0

    def like_comment(self):
        self.likes += 1

user = User("Vanshika", "vanshika@gmail.com")
print(vars(user))

channel = Channel("CodeWithVanshika", "Vanshika")
print(vars(channel))

video = Video("Python OOP Tutorial", "25 Minutes", "Education")
print(vars(video))

playlist = Playlist("Python Basics")
print(vars(playlist))

comment = Comment("Aman", "Very helpful video!")
print(vars(comment))

user.subscribe()
channel.add_subscriber()

video.watch()
video.watch()
video.like()

playlist.add_video()

comment.like_comment()

print("\nAfter Updates:\n")

print(vars(user))
print(vars(channel))
print(vars(video))
print(vars(playlist))
print(vars(comment))
