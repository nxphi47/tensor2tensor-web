from __future__ import print_function
from __future__ import absolute_import
from __future__ import unicode_literals

import os
import time
import argparse
import json


class DeploymentModel(object):
  def __init__(self, model_dir, checkpoint_file=None, params="{}") -> None:
    super().__init__()

    self.model_dir = model_dir
    self.checkpoint_file = checkpoint_file
    self.params = json.loads(params)

  def load_model(self):
    """
    Method to load from check point
    :return:
    """
    pass

  def predict(self, data):
    """
    Method to do prediction
    :param data:
    :return:
    """
    print(data)
    text = data.get('input', '')
    print('text: {}'.format(text))


    return {'response': 'test success'}

