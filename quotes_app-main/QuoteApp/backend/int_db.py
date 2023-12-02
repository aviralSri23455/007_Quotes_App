import sqlite3

connection = sqlite3.connect('database.db')
cursor = connection.cursor()

cursor.execute('''
CREATE TABLE quotes (
    id INTEGER PRIMARY KEY,
    quote_text TEXT NOT NULL,
    author_name TEXT NOT NULL
)
''')

# Insert initial data
cursor.executemany('''
INSERT INTO quotes (quote_text, author_name)
VALUES (?, ?)
''', [
    ("Life isn't about getting and having, it's about giving and being.", "Kevin Kruse"),
    ("Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"),
    # ... add more quotes as needed
])

connection.commit()
connection.close()
