from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# Configuration
DATABASE = 'database.db'

def connect_db():
    return sqlite3.connect(DATABASE)

def create_table():
    with connect_db() as connection:
        cursor = connection.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                task TEXT NOT NULL
            )
        ''')
        connection.commit()

@app.route('/cards/<id>')
def index(id):
    with connect_db() as connection:
        cursor = connection.cursor()
        cards_query = f"SELECT front, back FROM CARDS WHERE DeckId = {id}"
        cursor.execute(cards_query)
        rows = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]
        data = [dict(zip(column_names, row)) for row in rows]

        print(f"getting cards for deck {id}")
        print(data)
    return jsonify(data)

@app.route('/decks')
def get_decks():
    with connect_db() as connection:
        cursor = connection.cursor()
        
        cursor.execute('SELECT id, DeckName FROM DECKS')
        rows = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]
        data = [dict(zip(column_names, row)) for row in rows]

        #print(column_names)
        #print(type(jsonify(data)))
        #print(dir(jsonify(data)))
        print(data)
    return jsonify(data)

@app.route('/add', methods=['POST'])
def add():
    task = request.form['task']
    with connect_db() as connection:
        cursor = connection.cursor()
        cursor.execute('INSERT INTO tasks (task) VALUES (?)', (task,))
        connection.commit()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
