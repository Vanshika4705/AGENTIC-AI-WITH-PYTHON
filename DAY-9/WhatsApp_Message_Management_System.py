class Message:
    def __init__(self, sender, text):
        self.sender = sender
        self.text = text
        self.next = None


class WhatsApp:
    def __init__(self):
        self.head = None

    def add_in_front(self, sender, text):

        new_message = Message(sender, text)

        if self.head is None:
            self.head = new_message
            new_message.next = self.head

            print(f'\nMessage Added: "{text}"')
            print("Hashcode:", id(new_message))
            return

        temp = self.head

        while temp.next != self.head:
            temp = temp.next

        new_message.next = self.head
        temp.next = new_message
        self.head = new_message

        print(f'\nMessage Added: "{text}"')
        print("Hashcode:", id(new_message))

    def add_in_between(self, target_sender, sender, text):

        if self.head is None:
            print("Chat is empty.")
            return

        temp = self.head

        while True:

            if temp.sender == target_sender:

                new_message = Message(sender, text)

                new_message.next = temp.next
                temp.next = new_message

                print(f'\nMessage Added: "{text}"')
                print("Hashcode:", id(new_message))
                return

            temp = temp.next

            if temp == self.head:
                break

        print("Sender not found.")

    def delete_front(self):

        if self.head is None:
            print("Chat is empty.")
            return

        if self.head.next == self.head:

            print(f'\nDeleted Message: "{self.head.text}"')
            print("Hashcode:", id(self.head))

            self.head = None
            return

        last = self.head

        while last.next != self.head:
            last = last.next

        print(f'\nDeleted Message: "{self.head.text}"')
        print("Hashcode:", id(self.head))

        self.head = self.head.next
        last.next = self.head

    def delete_last(self):

        if self.head is None:
            print("Chat is empty.")
            return

        if self.head.next == self.head:

            print(f'\nDeleted Message: "{self.head.text}"')
            print("Hashcode:", id(self.head))

            self.head = None
            return

        previous = None
        current = self.head

        while current.next != self.head:
            previous = current
            current = current.next

        print(f'\nDeleted Message: "{current.text}"')
        print("Hashcode:", id(current))

        previous.next = self.head

    def delete_any_element(self, sender):

        if self.head is None:
            print("Chat is empty.")
            return

        if self.head.sender == sender:
            self.delete_front()
            return

        previous = self.head
        current = self.head.next

        while current != self.head:

            if current.sender == sender:

                print(f'\nDeleted Message: "{current.text}"')
                print("Hashcode:", id(current))

                previous.next = current.next
                return

            previous = current
            current = current.next

        print("Message not found.")

    def display(self):

        if self.head is None:
            print("\nNo messages available.")
            return

        temp = self.head

        print("\n========== WhatsApp Chat ==========")

        while True:

            print("----------------------------------")
            print("Sender   :", temp.sender)
            print("Message  :", temp.text)
            print("Hashcode :", id(temp))

            temp = temp.next

            if temp == self.head:
                break

        print("----------------------------------")


chat = WhatsApp()

print("\n===== ADDING MESSAGES =====")

chat.add_in_front("Vanshika", "Hello Everyone!")
chat.add_in_front("Aman", "Good Morning!")
chat.add_in_front("Priya", "How are you?")

chat.display()

print("\n===== INSERTING MESSAGE =====")

chat.add_in_between(
    "Aman",
    "Rahul",
    "Welcome to the group!"
)

chat.display()

print("\n===== DELETING FIRST MESSAGE =====")

chat.delete_front()

chat.display()

print("\n===== DELETING LAST MESSAGE =====")

chat.delete_last()

chat.display()

print("\n===== DELETING SPECIFIC MESSAGE =====")

chat.delete_any_element("Rahul")

chat.display()
