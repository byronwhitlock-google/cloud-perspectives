from flask import Flask, request, redirect, send_from_directory
import json 
   
# Setup flask server
app = Flask(__name__,
    static_url_path='', 
    static_folder='../browser/build') # default route serves the react app

@app.route('/') 
def home (): 
    return redirect("index.html", 302)

@app.route('/oath-callback')
def oauth_callback():
    return

# Setup url test route which will calculate
# total sum of array.
@app.route('/cloud-perspectives-api', methods = ['POST']) 
def get_graph(): 
    data = request.get_json() 
    print(data)

    #cachinng

    # iof not in cache call cloud perpectives library
  
    # Data variable contains the 
    # data from the node server
    ls = data['array'] 
    result = sum(ls) # calculate the sum
  
    # Return data in json format 
    return json.dumps({"result":result})
   
if __name__ == "__main__": 
    app.run(port=5000)