# Tensor2tensorWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Installation
+ nodejs, npm
+ angular-cli (global) ``npm install -g @angular/cli@latest``
+ go to project folder
+ ``npm install --save``
+ ``pip install flask flask-cors`` and pip install any required python packages for your model

## Tensor2Tensor templates
#### Develop
+ Develop your python model inside ``/backend/models``
+ Encapsulate your model in ``DeploymentModel`` in ``/backend/models/deployment.py``
+ Modify ``DeploymentModel`` with pre-defined methods
++ ``load_model()`` take ``model_dir`` and ``checkpoint_file`` to restore weights
++ ``predict(data)`` take the text, do inference, and return the output text with format ``{'response': '<predicted sequence>'}``
+ Strictly NO numpy data structure in the return object of ``predict(data)``, only JSON accepted.

#### Run
```bash
# keep all terminals running
# open terminal 1
npm start

# open terminal 2
export MODEL_DIR="your model dir"
export CHECKPOINT_FILE="your specific checkpoint file"
python backend.serve.py --model_dir ${MODEL_DIR} --checkpoint_file ${CHECKPOINT_FILE}

```
+ Open browser http://localhost:4200 or http://<IP_ADDRESS>:4200 if from another computer


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
