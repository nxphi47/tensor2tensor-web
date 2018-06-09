from __future__ import print_function
from __future__ import absolute_import
from __future__ import unicode_literals

import os
import time
from flask import Flask, request, jsonify
from flask_cors import CORS
import argparse
from models.deployment import *

app = Flask(__name__)
CORS(app)

MODEL = None


@app.route("/", methods=['GET'])
def index():
  return "hello world, it is working"


@app.route('/infer', methods=['POST'])
def infer():
  global MODEL
  if request.method == 'POST':
    content = request.get_json(silent=True)
    response = MODEL.predict(content)
    print(response)
    return jsonify(response)
  else:
    return jsonify({'response': 'error: method not POST'})


if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('--host', default='0.0.0.0', type=str)
  parser.add_argument('--port', default=3000, type=int)
  parser.add_argument('--model_dir', default='', type=str)
  parser.add_argument('--checkpoint_file', default='', type=str)
  parser.add_argument('--params', default='{}', type=str)

  args = parser.parse_args()

  MODEL = DeploymentModel(
    model_dir=args.model_dir,
    checkpoint_file=args.checkpoint_file,
    params=args.params
  )
  MODEL.load_model()

  app.run(host=args.host,
          port=args.port,
          debug=False
          )
