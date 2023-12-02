from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
QUOTES = [
    "Life isn't about getting and having, it's about giving and being. - Kevin Kruse",
    "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
    "Strive not to be a success, but rather to be of value. –Albert Einstein"
]

@app.route('/api/quotes')
def get_quotes():
    return jsonify(QUOTES)

if __name__ == "__main__":
    app.run(debug=True)