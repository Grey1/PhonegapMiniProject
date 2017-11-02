from flask import Flask
from flask import request
from flask import jsonify
import subprocess;
app = Flask(__name__)



@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
    	#photo is available in request object
        f = request.files['photo']
        # f has the photo and saved to location
        f.save('/home/arjun/uploaded_file')
        # run the image recognition code with parameters as "python file " and image file
        p= subprocess.check_output(["python","/home/arjun/classify_image.py","--image_file=/home/arjun/uploaded_file"])
        return jsonify({"data":p.decode()})


