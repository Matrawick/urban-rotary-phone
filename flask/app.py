from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# Configuration
DATABASE = 'database.db'

@app.before_request
def before_request():
    if request.method == 'OPTIONS':
        return '', 200

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

@app.route('/add_deck', methods=['POST'])
def add_deck():
    try:
        # Get the JSON data from the request
        json_data = request.get_json()

        # Perform your processing on the JSON data
        # For example, print the received JSON data
        print(json_data)
        if json_data.get("deckName") is None:
            response = {'message': 'deckName cannot be None'}
            return jsonify(response), 400
        json_data["deckName"] = json_data["deckName"].strip()
        if len(json_data.get("deckName")) == 0:
            response = {'message': 'deckName cannot be empty'}
            return jsonify(response), 400

        try:
            with connect_db() as connection:
                cursor = connection.cursor()
                cursor.execute(
                    'INSERT INTO DECKS (DeckName) VALUES (?)', (json_data["deckName"],)
                    )
                cursor.execute('SELECT last_insert_rowid()')
                inserted_id = cursor.fetchone()[0]
                connection.commit()
        except Exception as e:
            print(f"Error creating deck: {e}")
            response = {'message':f'Deck not created: {e}'}
            return jsonify(response), 400
            

        # Return a response (optional)
        response = {
            'message': f'Deck {json_data["deckName"]} created successfully',
            'id':inserted_id
        }
        return jsonify(response), 200

    except Exception as e:
        # Handle exceptions if necessary
        print(f"error: {str(e)}")
        return jsonify({'error': str(e)}), 400
    

if __name__ == '__main__':
    app.run(debug=True)
