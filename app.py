from flask import Flask, render_template, request, redirect, url_for, session

# Tell Flask to look for templates and static files in your frontend folder
app = Flask(
    __name__,
    template_folder="C:/Users/kg098/PycharmProjects/pythonProject/html",   # your HTML files
    static_folder="C:/Users/kg098/PycharmProjects/pythonProject/css"      # your CSS/JS files
)

app.secret_key = 'your_secret_key'

# Dummy user
USER = {
    "username": "testuser",
    "email": "test@demo.com",
    "password": "1234"
}

@app.route('/')
def index():
    return render_template('index.html')  # uses frontend/index.html

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']

    if username == USER['username'] and email == USER['email'] and password == USER['password']:
        session['user'] = username
        return redirect(url_for('dashboard'))
    else:
        return "Invalid credentials. <a href='/'>Try again</a>"

@app.route('/dashboard')
def dashboard():
    if 'user' in session:
        return render_template('dashboard.html', username=session['user'])
    else:
        return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
