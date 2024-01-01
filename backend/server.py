from flask import Flask

app = Flask(__name__)

@app.route('/data')
def getExampleData():
    return {
        'Name':'translation',
    }

if __name__ == '__main__':
    app.run(debug=True)