# Treviaa
Treviaa is a simple Flask-based web app with a secure user login and registration system. It connects to a database to store users and integrates Google Maps to update travel data. Built for learning, it shows how backend and UI work together in one project.
This project is a simple web application built using Python and Flask. It allows users to create an account, log in with their email and password, and access the Treviaa interface. After a successful login, the user’s name is displayed on the top-right corner of the screen, giving a personalised feel.

The application uses a lightweight SQLite database to store user details securely. Passwords are saved in a hashed (encrypted) format so they are not visible to anyone. Sessions are used so that only logged-in users can open the main Treviaa page, which protects private data and features.

In addition to the login system, the repository also contains a Python script that can update tourism data. It will connects to the Google Maps API to fetch useful details like opening hours, price levels and business status for hotels, restaurants or other travel spots in your Excel file. This makes it easier to keep your travel dataset updated automatically.

The project is organised into two parts: a Flask backend (handles login, registration and sessions) and HTML templates (login, registration and main UI pages). Anyone can clone this repository, install the required Python packages, run the Flask server locally, and see the login page in their browser. It is a great starting point for building a travel or tourism website with a working login system.
