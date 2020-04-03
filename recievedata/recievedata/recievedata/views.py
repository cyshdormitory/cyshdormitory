from flask import render_template, Flask, request, jsonify
import csv

app = Flask(__name__)
@app.route("/", methods=['POST'])
def submit():
    if request.method == 'POST':
        return 'Hello ' + request.values.get('username')    
    return render_template('post_submit.html')


if __name__ == '__main__':
    app.debug = True
    app.run()

